import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/Card";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { getPhotos } from "../../redux/actions/photos";
import InfiniteScroll from "react-infinite-scroll-component";
import './style.css'
import { Bars } from "react-loader-spinner";
const MainPage = () => {
    const photos = useSelector(state => state.photos.photos)
    const loading = useSelector(state => state.photos.isPhotosLoading)
    const total = useSelector(state => state.photos.totalPhotos)
    const dispatch = useDispatch()

    console.log(photos, 'photos');
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(getPhotos(page))
    }, [page])


    const nextHandler = () => {
        setPage(page + 1)
    }
    return (
        <Layout nickName='Vitaly' id={1}>
            <div className="mainPageRoot">
                {loading ? (<div className="mainLoaderContainer">
                    <Bars color="#000bff" height={80} width={80} />
                </div>) :
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
                                userName={author.nickname}
                                imgUrl={imgUrl}
                                userId={author.id}
                                likes={likes.length}
                                isLikeByYou={true}
                                comments={comments}
                                avatarUrl={author.avatarUrl}
                                className='mainPAgeCard'>
                            </PostCard>
                        ))}
                    </InfiniteScroll>}
            </div>
        </Layout>

    )
}

export default MainPage;