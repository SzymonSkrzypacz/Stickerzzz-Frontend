const initState = {
    registerModal: false,
    loginModal: false,
    registerNotification: false

}

const modalsReducer = (state = initState, action) => {
    console.log(action.type)
switch (action.type) {
    case 'REGISTER_MODAL_SWITCH':
      //console.log(action.payload);
      return {
        ...state,
        registerModal: action.payload
      }
    case 'LOGIN_MODAL_SWITCH':
      //console.log('reducer');
        return {
        ...state,
        loginModal:  !state.loginModal
      }
    case 'REGISTER_NOTIFICATION_SWITCH':
    return {
        ...state,
        registerNotification: action.payload
    }

    default:
      return state
  }
};

export default modalsReducer;