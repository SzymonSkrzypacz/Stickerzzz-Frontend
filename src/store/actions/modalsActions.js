export const switchRegisterModalOpen = () => {
    //console.log('akcja 1')
    return (dispatch, getState) => {
                dispatch({ type: 'REGISTER_MODAL_SWITCH', payload: false })
        }
}

export const switchRegisterModalClose = () => {
    //console.log('akcja 2')
    return (dispatch, getState) => {
                dispatch({ type: 'REGISTER_MODAL_SWITCH', payload: true })
        };
}

export const switchLoginModal = () => {
    return (dispatch, getState) => {
                dispatch({ type: 'LOGIN_MODAL_SWITCH' })
        };
}

export const switchRegisterNotificationOpen = () => {
    return (dispatch, getState) => {
                dispatch({ type: 'REGISTER_NOTIFICATION_SWITCH', payload: true })
        };
}

export const switchRegisterNotificationClose = () => {
    //console.log('xd')
    return (dispatch, getState) => {
                dispatch({ type: 'REGISTER_NOTIFICATION_SWITCH', payload: false })
        };
}

export const switchAddPostModalClose = () => {
    //console.log('xd')
    return (dispatch, getState) => {
                dispatch({ type: 'ADD_POST_MODAL_SWITCH', payload: false })
        };
}

export const switchAddPostModalOpen = () => {
    //console.log('xd')
    return (dispatch, getState) => {
                dispatch({ type: 'ADD_POST_MODAL_SWITCH', payload: true })
        };
}



export const switchEditProfileModalClose = () => {
    //console.log('xd')
    return (dispatch, getState) => {
                dispatch({ type: 'EDIT_PROFILE_MODAL_SWITCH', payload: false })
        };
}

export const switchEditProfileModalOpen = () => {
    //console.log('xd')
    return (dispatch, getState) => {
                dispatch({ type: 'EDIT_PROFILE_MODAL_SWITCH', payload: true })
        };
}
