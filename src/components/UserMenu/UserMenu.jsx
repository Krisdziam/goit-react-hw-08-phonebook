import { Box, Button, Typography } from '@mui/material';
import { useAuth } from 'components/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <AccountCircleIcon
        sx={{
          marginRight: '5px',
        }}
      />
      <Typography
        fontWeight="400"
        variant="h6"
        fontStyle="italic"
        marginRight="10px"
      >
        Welcome, {user.name}
      </Typography>
      <Button
        variant="contained"
        sx={{
          color: '#000',
          padding: '2px',
          backgroundColor: 'rgb(254, 217, 217)',
          textTransform: 'capitalize',
        }}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
