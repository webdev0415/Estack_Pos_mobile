// Place here all endpoint addresses that app makes api calls to.
// for example:
// export const SIGN_UP_ENDPOINT = '/api/signup';
export const SIGN_IN_ENDPOINT = '/auth/login/pos';
export const SIGN_UP_ENDPOINT = '';
export const TEST_AUTH_ENDPOINT = '';
export const REFRESH_ACCESS_TOKEN_ENPOINT = '';

export const GRAND_POINTS_ENDPOINT = '/pos/service/grant-points/'; // + customer id
export const CREATE_POS_ENDPOINT = '/pos/create';
export const POS_DETAILS_ENDPOINT = '/pos/service/self';

export const DENY_COUPON_ENDPOINT = '/pos/service/deny-coupon/'; // + couponUuid
export const APPROVE_COUPON_ENDPOINT = '/pos/service/accept-coupon/'; // + couponUuid

export const COUPON_REDEEMED = 'COUPON_REDEEMED';

export const POS_WALLET_ENDPOINT = '/pos/service/transactions/logs-list';
export const FORGOT_PASSWORD_ENDPOINT = '/auth/forgot-password';

export const GET_CUSTOMER_INFOR_ENDPOINT = '/pos/service/get-customer-info/'
