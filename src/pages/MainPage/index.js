import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/Card";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { getPhotos, sendComment, toggleLike } from "../../redux/actions/photos";
import InfiniteScroll from "react-infinite-scroll-component";
import './style.css'
import { Bars } from "react-loader-spinner";
const MainPage = () => {
    const photos = useSelector(state => state.photos.photos)
    const loading = useSelector(state => state.photos.isPhotosLoading)
    const total = useSelector(state => state.photos.totalPhotos)
    const mutateLoading = useSelector(state => state.photos.isMutateLoading)



    const autorizedUser = useSelector(state => state.users.autorizedUser)
    const dispatch = useDispatch()

    console.log(photos, 'photos');
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(getPhotos(page))
    }, [page])


    const nextHandler = () => {
        setPage(page + 1)
    }

    const onLikeClick = (photoId) => {
        dispatch(toggleLike(autorizedUser.id, photoId))
    }

    const onCommentSendClick = (photoId, comment) => {
        dispatch(sendComment(autorizedUser.nickname,photoId, comment))
    }

    return (
        <Layout nickName={autorizedUser.nickname} id={autorizedUser.id} avatarUrl={autorizedUser.avatarUrl}>
            <div className="mainPageRoot">
            <InfiniteScroll
                        dataLength={photos.length}
                        next={nextHandler}
                        hasMore={photos.length < total}
                        loader={<div className="mainLoaderContainer">
                            <Bars color="#000bff" height={15} width={15} />
                        </div>}
                        endMessage={
                            <p className="mainLoaderContainer">Thats all</p>
                        }>
                        {photos.map(({ author, imgUrl, id, likes, comments }) => (
                            <PostCard
                                key={id}
                                id={id}
                                userName={author.nickname}
                                imgUrl={imgUrl}
                                userId={author.id}
                                likes={likes.length}
                                isLikeByYou={likes.includes(autorizedUser.id)}
                                comments={comments}
                                avatarUrl={author.avatarUrl}
                                className='mainPAgeCard'
                                onLikeClick={onLikeClick}
                                onCommentSendClick={onCommentSendClick}
                                mutateLoading = {mutateLoading}
                            >

                            </PostCard>
                        ))}
                    </InfiniteScroll>
            </div>
        </Layout>

    )
}

export default MainPage;