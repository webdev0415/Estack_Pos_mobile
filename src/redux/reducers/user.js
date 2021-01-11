import { createReducer } from 'redux-act';
import { userSignedIn, userSignedOut, setDetailsAction, setFullDetailsAction} from '../actions';

const initialState = {
  _id: null,
  email: null,
  imageId: null,
  place: null,
  pos: null,
  business: null,
};

const userReducer = createReducer({
  [userSignedIn]: (state, payload) => ({
    _id: payload.user._id,
    email: payload.user.auth.email,
    imageId: payload.user.avatarFileId,
  }),
  [setDetailsAction]: (state, payload) => ({
    ...state,
    place: payload.place,
  }),
  [setFullDetailsAction]: (state, payload) => ({
    _id: payload.user._id,
    pos: payload.pos,
    email: payload.user.auth.email,
    imageId: payload.user.avatarFileId,
    place: payload.place,
    business: payload.business,
  }),
  [userSignedOut]: () => ({
    ...initialState,
  }),
}, initialState);

export default userReducer;
