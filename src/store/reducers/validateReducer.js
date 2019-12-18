const initState = {
  emailError: '',
  userNameError: '',
  passwordError: '',
  reapetedPasswordError: '',
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
        passwordError: ''
      }
      case 'ERROR_EMAIL':
      //console.log(JSON.parse(localStorage.getItem('user')));
      return {
        ...state,
        emailError: action.err
      }
      
      case 'CORRECT_EMAIL':
      //console.log(JSON.parse(localStorage.getItem('user')));
      return {
        ...state,
        emailError: ''
      }
            case 'ERROR_USER_NAME':
      //console.log(JSON.parse(localStorage.getItem('user')));
      return {
        ...state,
        userNameError: action.err
      }
      
      case 'CORRECT_USER_NAME':
      //console.log(JSON.parse(localStorage.getItem('user')));
      return {
        ...state,
        userNameError: ''
      }
    default:
      return state
  }
};

export default validateReducer;