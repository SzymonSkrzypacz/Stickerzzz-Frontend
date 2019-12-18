import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'

import authReducer from './authReducer';
import postReducer from './postReducer';
import validateReducer from './validateReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postReducer,
  firebase: firebaseReducer,
  validate: validateReducer
});

export default rootReducer;
