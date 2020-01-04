const initState = {
  authError: null,
  user: JSON.parse(localStorage.getItem('user')) !== undefined ? JSON.parse(localStorage.getItem('user')) : null,
  admin: true,
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'Login failed'
      }

    case 'LOGIN_SUCCESS':
      localStorage.setItem('user', JSON.stringify(action.res.data.user));
      //console.log(JSON.parse(localStorage.getItem('user')));
      return {
        ...state,
        authError: null,
        user: action.res.data.user,
      }

    case 'SIGNOUT_SUCCESS':
      localStorage.removeItem('user');
      return {
        ...state,
        authError: null,
        user: null,
      }

    case 'SIGNUP_SUCCESS':
      //console.log(action.res)
      return {
        ...state,
        user: action.res.user,
        authError: null,
      }
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: Object.keys(action.err.response.data.errors)[0],
      }
    case 'CLEAR_ERROR':
      return {
        ...state,
        authError: null,
      }

    default:
      return state
  }
};

export default authReducer;