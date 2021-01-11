import { createReducer } from 'redux-act';
import { setCouponsAction, userSignedOut, getCouponAction } from '../actions';

const initialState = {
  coupons: null,
};

const couponsReducer = createReducer({
  [setCouponsAction]: (state, payload) => ({
    coupons: payload,
  }),
  [getCouponAction]: (state, payload) => ({
    coupons: [...state.coupons, payload]
  }),
  [userSignedOut]: () => ({
    ...initialState,
  }),
}, initialState);

export default couponsReducer;
