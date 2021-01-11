import { createReducer } from 'redux-act';
import { setCustomerAction, clearCustomerAction } from '../actions';

const initialState = {
  customer: null,
};

const customerReducer = createReducer({
  [setCustomerAction]: (state, payload) => ({
    customer: payload,
  }),
  [clearCustomerAction]: () => ({
    ...initialState,
  }),
}, initialState);

export default customerReducer;
