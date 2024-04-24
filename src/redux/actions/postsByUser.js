import { api } from "../../api"
import { getPhotosFromState } from "../../utils";
import { getPostsFailed, getPostsStarted, getPostsSuccess } from "../actionCreators/postsByUser"


export const getPostsByUser = (userId) => {
    return async (dispatch) => {
        try {
            dispatch(getPostsStarted());

            const response = await api.postsByUser.getPostsByUser({
                url: `/${userId}`,
            });

            console.log(response, 'rs');

            dispatch(getPostsSuccess(response.data.posts));
        } catch (error) {
            dispatch(getPostsFailed(error));
        }
    };
};

export const toggleLikeOnPost = (userId,postId) => {
    return async (dispatch, getState) => {
        const posts = getState().postsByUser.posts

        const newPost = getPhotosFromState(post, postId)

        if (newPost.likes.includes(userId)) {
            newPost.likes = newPost.likes.filter(like => like !== undefined)
            
        }else{
            newPost.likes.push(userId)
        }
    }
}