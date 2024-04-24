import { api } from "../../api"
import { getAutorizedUserSucceess, getUserFailed, getUserStarted, getUserSuccess } from "../actionCreators/users"




export const getUser = (id) => {
    return async (dispatch) => {
        try {
            dispatch(getUserStarted())
            const response = await api.users.getUser(id)



            dispatch(getUserSuccess(response.data))
        } catch (error) {
            dispatch(getUserFailed(error))
        }
    }
}


export const getAutorizedUser = (id = 1) => {
    return async (dispatch) => {
        try {
            dispatch(getUserStarted())
            const response = await api.users.getUser(id)



            dispatch(getAutorizedUserSucceess(response.data))


        } catch (error) {
            dispatch(getUserFailed(error))
        }
    }
}