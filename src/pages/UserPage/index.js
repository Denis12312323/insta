import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout"
import './style.css'
import UserBio from "../../components/UserBio";
import Card from "../../components/UserCard";
import { toggleLike } from "../../redux/actions/photos";
import { useEffect } from "react";
import { getPostsByUser } from "../../api/postsByUser";
import { useParams } from "react-router-dom";



const UserPage = () => {

    const autorizedUser = useSelector(state => state.users.autorizedUser)
    const posts = useSelector(state => state.postsByUser.posts);
    const isLoading = useSelector(state => state.postsByUser.isPostsLoading)
    
    const dispatch = useDispatch()
    const { id } = useParams()


    console.log(posts, 'posts');

    useEffect(() => {
        dispatch(getPostsByUser(id))
    },[])


    const onLikeClick = (photoId) => {
        dispatch(toggleLike(autorizedUser.id, photoId))
    }


    return (
        
        <Layout nickName={autorizedUser.nickname} id={autorizedUser.id} avatarUrl={autorizedUser.avatarUrl}>
            <div className="UserPageRoot">
                <UserBio
                    avatarUrl={autorizedUser.avatarUrl}
                    nickname={autorizedUser.nickname}
                    subscribers={autorizedUser.subscribers.length}
                    subscribed={autorizedUser.subscribed.length}
                    firstName={autorizedUser.firstName}
                    lastName={autorizedUser.lastName}
                    description={autorizedUser.description}
                    url={autorizedUser.url}
                />
                <div className="UserPageRootContent">
                    {posts.map(({comments,likes, imgUrl, id}) => 
                        <Card 
                        imgUrl={imgUrl}
                        className='UserPageCard' 
                        likes={likes.length} 
                        comments={comments.length} 
                        isLikedByYou={likes.includes(autorizedUser.id)} 
                        onLikeClick={() => onLikeClick(id)} 
                    />)}
                    
                

                </div>
            </div>
        </Layout>
    )
}

export default UserPage;