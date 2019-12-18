// import firebase from 'firebase';
import axios from 'axios';
import apiUrl from '../../config/cfg';

export const signIn = (credentials) => {
   return (dispatch, getState) => {
        axios.post(`${apiUrl}api/Users/login`, {
            'user': {
                'email': credentials.email,
                'password': credentials.password,
            }
        })
            .then(function (res) {
                dispatch({ type: 'LOGIN_SUCCESS', res });
                return true
            }).catch(function (err) {
                console.log(err.message)
                dispatch({ type: 'LOGIN_ERROR', err });
                return false
            });

    }
}

export const signOut = () => {
    return (dispatch, getState) => {
                dispatch({ type: 'SIGNOUT_SUCCESS' })
        };
    }


export const signUp = (newUser) => {
    //console.log(newUser);
    return (dispatch, getState) => {
        axios.post(`${apiUrl}api/Users`, {
            'user': {
                'userName': newUser.userName,
                'email': newUser.email,
                'password': newUser.password,
            }
        })
            .then(function (res) {
                dispatch({ type: 'SIGNUP_SUCCESS', res });
                return true
            }).catch(function (err) {
                //console.log(err.message)
                dispatch({ type: 'SIGNUP_ERROR', err });
                return false
            });

    }
}

export const closeAlert = (dispatch) => {
    return dispatch({ type: 'CLOSE_ALERT' });
}

export const clearError = (dispatch) => {
    return (dispatch, getState) => {
                dispatch({ type: 'CLEAR_ERROR' })
        };
}
