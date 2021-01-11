import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import nav from '../../navigation/reducer';
import auth from './auth';
import user from './user';
import coupons from './coupons';
import wallet from './wallet';
import customer from './customer';

const reducer = combineReducers({
  form,
  nav,
  auth,
  user,
  coupons,
  wallet,
  customer,
});

export default reducer;
