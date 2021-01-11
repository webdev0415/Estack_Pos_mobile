import { createAction } from 'redux-act';

export const grandPointsAction = createAction('GRAND_POINTS_ACTION');
export const getPosWalletAction = createAction('GET_POS_WALLET_ACTION');
export const setPosWalletAction = createAction('SET_POS_WALLET_ACTION');

export const getCustomerAction = createAction('GET_CUSTOMER_ACTION');
export const setCustomerAction = createAction('SET_CUSTOMER_ACTION');
export const clearCustomerAction = createAction('CLEAR_CUSTOMER_ACTION');
