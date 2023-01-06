import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'components/hooks/useAuth';
import Navigation from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export default function Layout() {
  const { isLoggedIn } = useAuth();
 
  return (
    <div className={styles.container}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <Outlet />
    </div>
  );
}
