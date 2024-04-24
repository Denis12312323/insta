



export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILED = 'GET_USER_FAILED'
export const GET_USER_STARTED = 'GET_USER_STARTED'
export const GET_AUTORIZED_USER_SUCCEESS = 'GET_AUTORIZED_USER_SUCCEESS'

export const getUserSuccess = (user) => ({
    type: GET_USER_SUCCESS,
    payload: user,
})

export const getUserFailed = (err) => ({
    type: GET_USER_FAILED,
    payload: err,
})

export const getUserStarted = () => ({
    type: GET_USER_STARTED
})

export const getAutorizedUserSucceess = (user) => ({
    type: GET_AUTORIZED_USER_SUCCEESS,
    payload: user,
})


