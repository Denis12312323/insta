

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILED = 'GET_POSTS_FAILED'
export const GET_POSTS_STARTED = 'GET_POSTS_STARTED'



export const getPostsSuccess = (posts) => ({
    type: GET_POSTS_SUCCESS,
    payload: posts,
})

export const getPostsFailed = (err) => ({
    type: GET_POSTS_FAILED,
    payload: err,
})

export const getPostsStarted = () => ({
    type: GET_POSTS_STARTED
})