import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from 'components/hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AppBar, Box, Typography } from '@mui/material';
// import { AuthNav } from 'components/AuthNav/AuthNav';

export default function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar
      sx={{
        display: 'flex',
        flexDirection: 'row',
        padding: '5px 15px',
        textShadow: '1px 1px 2px pink',
        alignItems: 'center',
      }}
      position="static"
    >
      <Typography
        fontWeight="600"
        variant="h6"
        component="h1"
      >
        Phonebook
      </Typography>

      <Links to="/">Home</Links>

      {isLoggedIn && <Links to="/contacts">Contacts</Links>}
      <Box
        sx={{
          ml: 'auto',
        }}
      >
        {isLoggedIn ? <UserMenu /> : <UserMenu />}
      </Box>
    </AppBar>
  );
}
export const Links = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding-left: 20px;
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  color: #fff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: rgb(200, 200, 200);
  }
  &.active {
    color: rgb(254, 217, 217);
  }
`;
