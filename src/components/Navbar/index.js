import UserBadge from '../UserBadge';
import './styles.css';

const Navbar = ({
    nickName,
    avatarUrl,
    id,
}) => {
    return (
        <div className="NavbarRoot">
            <div className='NavbarWrapper'>
                <a href='/' className='NavbarLink'>INSTA</a>
                <UserBadge nickName={nickName} avatarUrl={avatarUrl} id={id} />
            </div>
        </div>
    );
};

export default Navbar;