import { Box } from '@mui/system';
import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

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
      <div>
        <Outlet />
      </div>
    </Box>
  );
}
