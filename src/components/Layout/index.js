import Navbar from '../Navbar';
import './style.css';


const Layout = ({ nickName, avatarUrl, id, children }) => {
    return (
        <div className='layoutRoot'>
            <Navbar nickName={nickName} avatarUrl={avatarUrl} id={id}></Navbar>
            <div className='layoutBody'>
                {children}
            </div>
        </div>
    )
}

export default Layout