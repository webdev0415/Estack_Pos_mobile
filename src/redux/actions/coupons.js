import { createAction } from 'redux-act';

export const refreshAction = createAction('REFRESH_ACTION');

export const setCouponsAction = createAction('SET_COUPONS_ACTION');
export const getCouponAction = createAction('GET_COUPON_ACTION');

export const denyCouponAction = createAction('DENY_COUPON_ACTION');
export const approveCouponAction = createAction('APPROVE_COUPON_ACTION');
