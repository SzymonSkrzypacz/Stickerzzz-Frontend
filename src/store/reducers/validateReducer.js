const initState = {
  emailError: null,
  userNameError: null,
  passwordError: null,
  reapetedPasswordError: null,
}

const validateReducer = (state = initState, action) => {
  switch (action.type) {
      case 'ERROR_PASSWORD':
      //console.log(JSON.parse(localStorage.getItem('user')));
      return {
        ...state,
        passwordError: action.err
      }
      
      case 'CORRECT_PASSWORD':
      //console.log(JSON.parse(localStorage.getItem('user')));
      return {
        ...state,
        passwordError: null
      }
    default:
      return state
  }
};

export default validateReducer;