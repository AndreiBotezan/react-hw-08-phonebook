import { useSelector } from 'react-redux/';
import authSelectors from 'redux/auth/auth-selectors';
import Logo from './Logo/Logo';
//import Navigation from 'components/AppBar/Navigation';
import AuthMenu from './AuthMenu/AuthMenu';
import UserMenu from './UserMenu/UserMenu';
import s from './AppBar.module.css';

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return <header className={s.header}>
        <div className={s.navigation}>
            <Logo link={'/'} />
            <div className={s.menu}>
                {isLoggedIn ? <UserMenu /> : <AuthMenu />}
            </div>
        </div>
    </header>
}