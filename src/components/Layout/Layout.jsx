import { Box } from '@mui/system';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'components/hooks/useAuth';
import Navigation from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <Box>
      <Box
        sx={{
          paddingBottom: '50px',
    
      
        }}
      >
        <Navigation />
      </Box>
      <div className={styles.container}>
        <Outlet />
      </div>
    </Box>
  );
}
