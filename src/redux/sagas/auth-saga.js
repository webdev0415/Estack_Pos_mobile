import { Alert } from "react-native";
import {
  put,
  call,
  all,
  takeLatest,
  takeEvery,
  select
} from "redux-saga/effects";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from "react-navigation";

import * as endpoints from "../../constants/endpoints";
import api, { resetAuthHeader } from "../../utils/axios";
import * as actions from "../actions";

const getToken = state => state.auth.accessToken;

function* signIn({ payload }) {
  try {
    const { data: user } = yield call(
      api.post,
      endpoints.SIGN_IN_ENDPOINT,
      payload
    );
    yield all([
      AsyncStorage.multiSet([
        ["accessToken", user.accessToken],
        ["refreshToken", user.refreshToken]
      ]),
      yield put(actions.userSignedIn(user)),
      yield put(actions.getDetailsAction())
    ]);
    yield put(
      StackActions.push({
        routeName: "Root"
      })
    );
    payload.cb();
  } catch (error) {
    payload.cb();
    console.log("signInError", error);

    if (error.request.status === 401)
      setTimeout(() => Alert.alert("Hm...", "Incorrect password"), 0);
    if (error.request.status === 404)
      setTimeout(
        () => Alert.alert("Ooops!", "User with such email was not found"),
        0
      );
  }
}

function* signUp({ payload }) {
  try {
    const response = yield call(api.post, endpoints.SIGN_UP_ENDPOINT, payload);
    yield put(actions.userSignedIn(response.data));
    yield call(setAccessTokenToHeader);
  } catch (error) {
    console.log("error: ", error.response);
    yield put(actions.signUpRequestFailedAction());
  }
}

function* signOut() {
  yield AsyncStorage.multiRemove(["accessToken", "refreshToken"]);
  yield put(actions.userSignedOut());
  resetAuthHeader();
}

function* testAuth() {
  try {
    const token = yield call(setAccessTokenToHeader);
    if (token) {
      const response = yield call(api.get, endpoints.TEST_AUTH_ENDPOINT);
      yield put(actions.userSignedIn(response.data));
    }
    yield put(
      StackActions.push({
        routeName: "SignIn"
      })
    );
  } catch (error) {
    console.log(error.response);
    yield put(actions.testAuthRequestFailedAction());
  }
}

function* setAccessTokenToHeader() {
  const token = yield select(getToken);
  yield call(api.setAuthToken, token);
  return token;
}

export default function* authSagas() {
  yield all([
    takeLatest(actions.signInAction, signIn),
    takeLatest(actions.signUpAction, signUp),
    takeLatest(actions.signOutAction, signOut),
    takeEvery(actions.testAuthAction, testAuth)
  ]);
}
