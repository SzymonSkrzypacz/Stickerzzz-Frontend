export const errorPassword = (err) => {
    return (dispatch, getState) => {
                dispatch({ type: 'ERROR_PASSWORD', err })
        };
    }

export const correctPassword = () => {
    console.log('poprawne')
    return (dispatch, getState) => {
                dispatch({ type: 'CORRECT_PASSWORD'})
        };
    }


