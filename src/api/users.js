import { makeRequest } from "./makeRequest";

const ULR = '/users'

export const getUser =(userId,config) =>makeRequest({
    method: 'GET',
    url: `${ULR}/${userId}`,
    ...config
})