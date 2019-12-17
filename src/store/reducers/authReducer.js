const initState = {
  authError: null,
  user: JSON.parse(localStorage.getItem('user')) !== undefined ? JSON.parse(localStorage.getItem('user')) : null,
  admin: null,
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      //console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }

    case 'LOGIN_SUCCESS':
      // localStorage.setItem('user', JSON.stringify(action.res.data.user));
      console.log(JSON.parse(localStorage.getItem('user')));
      return {
        ...state,
        authError: null,
        user: action.res.data.user,
      }

    case 'SIGNOUT_SUCCESS':
      // console.log('signout success');
      localStorage.removeItem('user');
      return {
        ...state,
        authError: null,
        user: null,
      }

    case 'SIGNUP_SUCCESS':

      return {
        ...state,
        authError: null,
      }
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: true,
      }

    default:
      return state
  }
};

export default authReducer;