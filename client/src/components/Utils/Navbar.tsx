import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Logo from '../../images/logo.png';
import { State } from '../../interfaces/store';
import PlainProfile from '../../images/plain-profile.avif';

const Navbar = () => {
    const location = useLocation();
    const user = useSelector((state: State) => state.auth)?.authData?.user;
    const isSigning = location.pathname.includes('/login') || location.pathname.includes('/signup');

    return (
        <>
            {!isSigning && (
                <div className='shadow-normal sticky top-0 w-full bg-white z-10'>
                    <nav className='flex items-center justify-between mx-auto py-1 px-3 max-w-7xl'>
                        <Link to='/'>
                            <img className='h-100px' src={Logo} alt="JobMagnet" />
                        </Link>
                        <div>
                            <ul className='flex items-center gap-10 text-xl text-textcolor'>
                                <li className='hover:text-primary'><Link to="/jobs"><i className="fa-solid fa-briefcase"></i> Find Work</Link></li>
                                <li className='hover:text-primary'><Link to="/freelancers"><i className="fa-solid fa-graduation-cap"></i> Find Freelancers</Link></li>
                            </ul>
                        </div>
                        <div className='flex gap-3 items-center'>
                            {user && <Link to={`/profile/${user._id}`}><img className='h-12 w-12 cursor-pointer rounded-full object-cover' src={PlainProfile} alt="profile" /></Link>}
                            <Link to='/login' className='px-4 py-2 bg-secondary rounded-md text-lg text-white'>Log in</Link>
                            <Link to='/signup' className='px-4 py-2 bg-secondary rounded-md text-lg text-white'>Sign up</Link>
                        </div>
                    </nav>
                </div>
            )}
        </>
    )
}

export default Navbar;