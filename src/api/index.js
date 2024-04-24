
import { getPhotos, mutatePhoto } from './photos';
import { getUser } from './users';
import { getPostsByUser } from './postsByUser';

export const api = {
    photos: {
        getPhotos,
        mutatePhoto,
    },
    users: {
        getUser,
        
    },
    postsByUser: {
        getPostsByUser
    },
};