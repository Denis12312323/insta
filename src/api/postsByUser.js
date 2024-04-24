import { makeRequest } from "./makeRequest";

const URL = '/postsByUser';

export const getPostsByUser = (config) => {
    config.url = `${URL}${config.url}`

    return makeRequest({
        method: 'GET',
        ...config
    });
};
