import UserBadge from '../UserBadge';
import './style.css';

const Navbar = ({ nickName, avatarUrl, id }) => {
    return (
        <div className='navbarRoot'>
            <div className='navbarWrapper'>  
                <span >Insta</span>
                <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id}></UserBadge>
            </div>
        </div>
    )
}


export default Navbar;