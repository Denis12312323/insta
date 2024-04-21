import UserBadge from '../UserBadge';
import Comment from '../Comment';
import { useState } from "react";
import cn from 'classnames';
import { nanoid } from 'nanoid';
import './style.css';


const PostCard = ({ userName, avatarUrl, userId, imgUrl, likes, isLikeByYou, comments, className }) => {

    const [isCommentsShown, setIsCommentsShown] = useState(false)

    const renderComments = () => {
        if (comments.length > 2 && !isCommentsShown) {
            const commentsCopy = [...comments];
            const commentForRender = commentsCopy.splice(comments.length - 2, 2)

            return (
                <>
                    <span className='postCardCommTittle' onClick={() => setIsCommentsShown(true)}>{`Смотреть все комментарии (${comments.length - commentForRender.length})`}</span>
                    {commentForRender.map((comment) => <Comment {...comment} key={nanoid()} />)}
                </>
            )
        }
        return comments.map((comment) => <Comment {...comment} />)


    }

    return (
        <div className={cn('PostCardRoot', className)}>
            <div className='PostCardHeader'>
                <UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId}></UserBadge>
            </div>
            <div>
                <img src={imgUrl} alt='image' className='PostCardImage' />
            </div>
            <div className='PostCardBtns'>
                <i className={`${isLikeByYou ? 'fas fa-heart' : 'far fa-heart'}`}></i>
                <i className="fa-regular fa-comment"></i>
            </div>
            <div className='PostCardLikes'>
                {`Нравится: ${likes}`}
            </div>
            <div className='PostCardComments'>
                {renderComments()}
            </div>
            <textarea className='PostCardTextarea' />
        </div>
    )
}


export default PostCard;