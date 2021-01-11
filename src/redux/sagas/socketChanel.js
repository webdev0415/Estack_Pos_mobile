import {
  take,
  call,
  apply,
  fork,
  all,
} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as actions from '../actions';
import SocketIOClient from 'socket.io-client';
import * as endpoints from '../../constants/endpoints';

import { sendLocalNotification } from '../../utils/notification';

let SOCKET = null;

function createSocketChannel(socket, store) {
  return eventChannel((emit) => {
    const errorHandler = (errorEvent) => {
      console.log('errorHandler');
      emit(new Error(errorEvent));
    };

    const eventHandler = (event) => {
      console.log('event', event);
      // puts event payload into the channel
      // this allows a Saga to take this payload from the returned channel
      emit(event);
    };

    socket.on('receiveFrom', eventHandler);
    socket.on('error', errorHandler);

    socket.on('connection')
    socket.on(endpoints.COUPON_REDEEMED, (coupon) => {
      sendLocalNotification({ title: 'New coupon', text: `Coupon shared by ${coupon.user.fullName}` })
      store.dispatch(actions.getCouponAction(coupon))
    })
    const unsubscribe = () => {
      socket.off('receiveFrom', eventHandler);
    };

    return unsubscribe;
  });
}

function* emitResponse(socket) {
  yield apply(socket, socket.emit, ['message received']);
}

function* watchSocketChannel(store) {
  if (!SOCKET) {
 
    SOCKET = yield call(SocketIOClient, 'http://estackk-api-lb-925393001.ap-southeast-1.elb.amazonaws.com', { transports: ['websocket'] });
    // SOCKET = yield call(SocketIOClient, 'http://134.249.227.172:2000', { transports: ['websocket'] });

    const socketChannel = yield call(createSocketChannel, SOCKET, store);
    while (true) {
      try {
        yield take(socketChannel);
        yield fork(emitResponse, SOCKET);
      } catch (err) {
        console.log('socket error: ', err);
        yield fork(watchSocketChannel);
      }
    }
  }
}

export default function* initSocket(store) {
  yield all([
    fork(watchSocketChannel, store),
  ]);
}
