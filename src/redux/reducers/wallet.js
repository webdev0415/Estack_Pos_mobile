import { createReducer } from 'redux-act';
import { userSignedOut, setPosWalletAction } from '../actions';

const initialState = {
  points: null,
  coupons: null,
  gmv: null,
};

const walletReducer = createReducer({
  [setPosWalletAction]: (state, payload) => ({
    ...state,
    points: payload.points,
    coupons: payload.coupons,
    gmv: payload.gmv,
  }),
  [userSignedOut]: () => ({
    ...initialState,
  }),
}, initialState);

export default walletReducer;
