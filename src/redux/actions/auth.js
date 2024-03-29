import { createAction } from 'redux-act';

export const signUpAction = createAction('SIGN_UP');
export const userSignedUp = createAction('USER_SIGNED_UP');
export const signUpRequestFailedAction = createAction('SIGN_UP_REQUEST_FAILED');

export const signInAction = createAction('SIGN_IN');
export const userSignedIn = createAction('USER_SIGNED_IN');
export const signInRequestFailedAction = createAction('SIGN_IN_REQUEST_FAILED');

export const signOutAction = createAction('SIGN_OUT');
export const userSignedOut = createAction('USER_SIGNED_OUT');

export const initHeaderAction = createAction('INIT_HEADER');

export const accessTokenUpdatedAction = createAction('ACCESS_TOKEN_UPDATED');

export const testAuthAction = createAction('TEST_AUTH');
export const testAuthRequestFailedAction = createAction('TEST_AUTH_FAILED');

export const createPosAction = createAction('CREATE_POS_ACTION');
export const setPosDetailsAction = createAction('SET_POS_DETAILS_ACTION');
export const setDetailsAction = createAction('SET_DETAILS_ACTIONS');
export const getDetailsAction = createAction('GET_DETAILS_ACTION');

export const setFullDetailsAction = createAction('GET_FULL_DETAILS_ACTION');

export const forgotPasswordAction = createAction('FORGOT_PASSWORD_ACTION');