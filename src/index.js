import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import firebase from 'firebase/app';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

const rrfConfig = {
  userProfile: 'users',
}
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU5DlxUqWjNqv8nFWuRD3m_-4ec7qaO7Y",
  authDomain: "stickerzzz-app.firebaseapp.com",
  databaseURL: "https://stickerzzz-app.firebaseio.com",
  projectId: "stickerzzz-app",
  storageBucket: "stickerzzz-app.appspot.com",
  messagingSenderId: "32438843979",
  appId: "1:32438843979:web:f3396b865b88864a862bce"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())),
  );

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
}


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
