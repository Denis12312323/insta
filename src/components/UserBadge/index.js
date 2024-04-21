import './style.css';
import {useNavigate} from 'react-router-dom';
const UserBadge = ({ nickName, avatarUrl, id }) => {
    const navigata = useNavigate()

    const onUserBadgeClick = () =>{
        navigata(`/${id}`)
    }
    return(
        <div className='userBadgeRoot' onClick={onUserBadgeClick}>
            {avatarUrl ? <img src={avatarUrl} alt='logo' className='logoAvatar'/> : <div className='userPlaceholder'/>}
            <span className='userName'>{nickName}</span>
        </div>
    )
}

export default UserBadge;