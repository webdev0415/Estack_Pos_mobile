import { Alert } from "react-native";
import { put, call, all, takeLatest } from "redux-saga/effects";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from "react-navigation";

import { grandPointsErrors } from "../../utils/grandErrors";
import * as endpoints from "../../constants/endpoints";
import api from "../../utils/axios";
import * as actions from "../actions";

const Authorization = token => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

function* updateAccessTokenByRefresh(payload) {
  const refreshToken = yield AsyncStorage.getItem("refreshToken");

  try {
    const { next, pl } = payload;

    const { data } = yield call(
      api.post,
      endpoints.REFRESH_ACCESS_TOKEN_ENPOINT,
      { token: refreshToken }
    );

    yield all([
      AsyncStorage.setItem("accessToken", data.accessToken),
      next({ payload: pl })
    ]);
  } catch (error) {
    console.log("updateAccessTokenByRefreshError", error);
    if (error.request.status === 401) {
      yield all([
        AsyncStorage.multiRemove(["accessToken", "refreshToken"]),
        put(StackActions.push({ routeName: "Login" }))
      ]);
    } else {
      yield all([
        AsyncStorage.multiRemove(["accessToken", "refreshToken"]),
        put(StackActions.push({ routeName: "Login" }))
      ]);
    }
  }
}

function* grandPoints({ payload }) {
  const accessToken = yield AsyncStorage.getItem("accessToken");

  try {
    const { _id, purchase: currencyAmount, grand } = payload;

    const { data } = yield call(
      api.post,
      `${endpoints.GRAND_POINTS_ENDPOINT}${_id}`,
      { currencyAmount: Number(currencyAmount) },
      Authorization(accessToken)
    );
    if (data) grand();
    yield getWallet();
  } catch (error) {
    console.log("GRANDPOINTS ERROR", error);
    console.log("ERROR Response", error.response);

    if (error.request.status === 401) {
      yield updateAccessTokenByRefresh({ next: grandPoints, pl: payload });
    } else if (error.request.status === 403) {
      alert("Can not grant points. You or your business is not active.");
    } else if (error.request.status === 400 && !error.response.data.type) {
      alert("Customer is not joined to business");
    } else {
      grandPointsErrors(error.response.data);
    }
  }
}

function* createPos({ payload }) {
  try {
    const { data } = yield call(
      api.post,
      endpoints.CREATE_POS_ENDPOINT,
      payload
    );
    yield AsyncStorage.multiSet([
      ["accessToken", data.accessToken],
      ["refreshToken", data.refreshToken]
    ]),
      yield put(actions.userSignedIn(data)),
      yield put(
        StackActions.push({
          routeName: "StoreAddress"
        })
      );
  } catch (error) {
    console.log("ErrorcreatePos", error);

    if (error.request.status === 401) {
      alert("Invalid Token!");
      yield put(
        StackActions.replace({
          routeName: "Login"
        })
      );
    }
  }
}

function* setPosDetails({ payload }) {
  const accessToken = yield AsyncStorage.getItem("accessToken");

  try {
    const { data } = yield call(
      api.put,
      endpoints.POS_DETAILS_ENDPOINT,
      payload,
      Authorization(accessToken)
    );
    yield all([
      put(actions.setDetailsAction(data)),
      put(actions.getDetailsAction())
    ]);
  } catch (error) {
    console.log("setPosDetailsError", error);

    if (error.request.status === 401) {
      yield updateAccessTokenByRefresh({ next: setPosDetails, pl: payload });
    } else {
      grandPointsErrors(error.response.data);
    }
  }
}

function* getFullDetails() {
  const accessToken = yield AsyncStorage.getItem("accessToken");
  yield put(
    actions.setPosWalletAction({
      points: 0,
      coupons: 0,
      gmv: 0
    })
  );
  yield put(actions.setCouponsAction([]));
  yield put(
    StackActions.push({
      routeName: "Main"
    })
  );

  try {
    const { data } = yield call(
      api.get,
      endpoints.POS_DETAILS_ENDPOINT,
      Authorization(accessToken)
    );
    yield all([
      put(actions.setFullDetailsAction(data)),
      put(actions.setCouponsAction(data.coupons)),
      getWallet()
    ]);
  } catch (error) {
    console.log("getPosDetailsError", error);

    if (error.request.status === 0) alert("No network connection");
    if (error.request.status === 401)
      yield updateAccessTokenByRefresh({ next: getFullDetails });
  }
}

function* refresh() {
  const accessToken = yield AsyncStorage.getItem("accessToken");

  try {
    const { data } = yield call(
      api.get,
      endpoints.POS_DETAILS_ENDPOINT,
      Authorization(accessToken)
    );
    yield all([
      put(actions.setFullDetailsAction(data)),
      put(actions.setCouponsAction(data.coupons)),
      getWallet()
    ]);
  } catch (error) {
    console.log("refreshError", error);

    if (error.request.status === 401)
      yield updateAccessTokenByRefresh({ next: getFullDetails });
  }
}

function* denyCoupon({ payload }) {
  const accessToken = yield AsyncStorage.getItem("accessToken");
  const { uuid } = payload;

  try {
    const { data } = yield call(
      api.put,
      `${endpoints.DENY_COUPON_ENDPOINT}${uuid}`,
      {},
      Authorization(accessToken)
    );
    if (data.status === "DENIED") {
      const { data } = yield call(
        api.get,
        endpoints.POS_DETAILS_ENDPOINT,
        Authorization(accessToken)
      );
      yield put(actions.setCouponsAction(data.coupons));
      yield getWallet();
      setTimeout(() => Alert.alert("Ok", "Coupon was denied."), 250);
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.log("denyCouponError", error);
    if (error.request.status === 401) {
      yield updateAccessTokenByRefresh({ next: denyCoupon, pl: payload });
    } else if (error.request.status === 403) {
      alert("Can not grant points. You or your business is not active.");
    } else {
      alert("Something went wrong. Please try again.");
    }
  }
}

function* approveCoupon({ payload }) {
  const accessToken = yield AsyncStorage.getItem("accessToken");
  const { uuid } = payload;

  try {
    yield call(
      api.put,
      `${endpoints.APPROVE_COUPON_ENDPOINT}${uuid}`,
      {},
      Authorization(accessToken)
    );

    const { data } = yield call(
      api.get,
      endpoints.POS_DETAILS_ENDPOINT,
      Authorization(accessToken)
    );
    yield put(actions.setCouponsAction(data.coupons));
    yield getWallet();
    yield put(
      StackActions.replace({
        routeName: "Main"
      })
    );
    setTimeout(() => Alert.alert("Ok", "Coupon was approved."), 250);
  } catch (error) {
    console.log("approveCouponError", error);
    if (error.request.status === 401) {
      yield updateAccessTokenByRefresh({ next: approveCoupon, pl: payload });
    } else if (error.request.status === 403) {
      alert("Can not grant points. You or your business is not active.");
    } else {
      alert("Something went wrong. Please try again.");
    }
  }
}

function* getWallet() {
  const accessToken = yield AsyncStorage.getItem("accessToken");

  try {
    const { data } = yield call(
      api.get,
      endpoints.POS_WALLET_ENDPOINT,
      Authorization(accessToken)
    );
    yield put(actions.setPosWalletAction(data));
  } catch (error) {
    console.log("getWalletError", error);
    if (error.request.status === 401) {
      yield updateAccessTokenByRefresh({ next: getWallet });
    } else {
      alert("Something went wrong. Please try again.");
    }
  }
}

function* forgotPassword({ payload }) {
  try {
    const { data } = yield call(
      api.post,
      endpoints.FORGOT_PASSWORD_ENDPOINT,
      payload
    );
    if (data === true) {
      Alert.alert("Success", "Check your email.");
      yield put(StackActions.replace({ routeName: "Login" }));
    } else {
      Alert.alert("Hm...", "Wrong email.");
    }
  } catch (error) {
    console.log("forgotPasswordError", error);
  }
}

function* getCustomer({ payload }) {
  const accessToken = yield AsyncStorage.getItem("accessToken");

  try {
    const { _id } = payload;

    const { data } = yield call(
      api.get,
      `${endpoints.GET_CUSTOMER_INFOR_ENDPOINT}${_id}`,
      Authorization(accessToken)
    );
    yield put(actions.setCustomerAction(data));
  } catch (error) {
    console.log("getCustomerError", error);

    if (error.request.status === 401) {
      yield updateAccessTokenByRefresh({ next: getCustomer, pl: payload });
    } else {
      alert("Something went wrong");
      yield put(
        StackActions.replace({
          routeName: "Main"
        })
      );
    }
  }
}

export default function* pointsSagas() {
  yield all([
    takeLatest(actions.grandPointsAction, grandPoints),
    takeLatest(actions.createPosAction, createPos),
    takeLatest(actions.setPosDetailsAction, setPosDetails),
    takeLatest(actions.getDetailsAction, getFullDetails),
    takeLatest(actions.denyCouponAction, denyCoupon),
    takeLatest(actions.approveCouponAction, approveCoupon),
    takeLatest(actions.refreshAction, refresh),
    takeLatest(actions.getPosWalletAction, getWallet),
    takeLatest(actions.forgotPasswordAction, forgotPassword),
    takeLatest(actions.getCustomerAction, getCustomer)
  ]);
}
