export const errorPassword = (err) => {
    return (dispatch, getState) => {
                dispatch({ type: 'ERROR_PASSWORD', err })
        };
    }

export const correctPassword = () => {
    //console.log('poprawne')
    return (dispatch, getState) => {
                dispatch({ type: 'CORRECT_PASSWORD'})
        };
    }


export const errorEmail = (err) => {
    //console.log('zły email')
    return (dispatch, getState) => {
                dispatch({ type: 'ERROR_EMAIL', err })
        };
    }
    
export const correctEmail = () => {
    //console.log('dobry email')
    return (dispatch, getState) => {
                dispatch({ type: 'CORRECT_EMAIL'})
        };
    }
    
export const errorUserName = (err) => {
    //console.log('zła nazwa uztykownika')
    return (dispatch, getState) => {
                dispatch({ type: 'ERROR_USER_NAME', err })
        };
    }
    
export const correctUserName = () => {
    //console.log('dobra nazwa uztykownika')
    return (dispatch, getState) => {
                dispatch({ type: 'CORRECT_USER_NAME'})
        };
    }