import { fork } from 'redux-saga/effects';
import authSaga from './auth-saga';
import allSagas from './allSagas';
import socketChanel from './socketChanel';

export default function* rootSaga(store) {
  yield fork(authSaga);
  yield fork(allSagas);
  yield fork(socketChanel, store);
};
