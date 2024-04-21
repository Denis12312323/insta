import './style.css';

const Comment = ({ nickname, text }) => {
    return (
        <div className='CommentRoot'>
            <div className='CommentName'>{nickname}:</div>
            <div>{text}</div>
        </div>
    )
}

export default Comment;