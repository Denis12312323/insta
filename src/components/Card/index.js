import UserBadge from '../UserBadge';
import Comment from '../Comment';
import { useState } from "react";
import cn from 'classnames';
import { nanoid } from 'nanoid';
import './style.css';


const PostCard = ({ userName, avatarUrl, userId, imgUrl, likes, isLikeByYou, comments, className, onLikeClick, id, onCommentSendClick, mutateLoading, }) => {

    const [isCommentsShown, setIsCommentsShown] = useState(false)
    const [comment, setComment] = useState('')


    const handleSendCommentClick = () => {
        if (comment) {
            onCommentSendClick(id, comment)
            setComment('')
        }
    }

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
                <i onClick={() => onLikeClick(id)} className={`${isLikeByYou ? 'fas fa-heart' : 'far fa-heart'}`}></i>
                <i className="fa-regular fa-comment"></i>
            </div>
            <div className='PostCardLikes'>
                {`Нравится: ${likes}`}
            </div>
            <div className='PostCardComments'>
                {renderComments()}
            </div>
            <div className='PostCardTextareaWrapper'>
                <textarea
                    placeholder='Оставьте комментарий'
                    className='PostCardTextarea'
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                />
                <button 
                disabled={mutateLoading} 
                className='PostCardSendButton' 
                onClick={handleSendCommentClick}>Отправить</button>
            </div>
        </div>
    )
}


export default PostCard;