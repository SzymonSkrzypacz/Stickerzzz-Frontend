export const switchRegisterModal = () => {
    console.log('akcja')
    return (dispatch, getState) => {
                dispatch({ type: 'REGISTER_MODAL_SWITCH' })
        };
}

export const switchLoginModal = () => {
    return (dispatch, getState) => {
                dispatch({ type: 'LOGIN_MODAL_SWITCH' })
        };
}
