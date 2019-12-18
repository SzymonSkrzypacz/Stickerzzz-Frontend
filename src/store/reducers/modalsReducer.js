const initState = {
    registerModal: false,
    loginModal: false
}

const modalsReducer = (state = initState, action) => {
    console.log(action.type)
  switch (action.type) {
    case 'REGISTER_MODAL_SWITCH':
      console.log('reducer');
      return {
        ...state,
        registerModal: !state.registerModal
      }
      case 'LOGIN_MODAL_SWITCH':
      console.log('reducer');
      return {
        ...state,
        loginModal:  !state.loginModal
      }

    default:
      return state
  }
};

export default modalsReducer;