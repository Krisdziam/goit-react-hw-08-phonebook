import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import styled from 'styled-components';
import { useAuth } from 'components/hooks/useAuth';
import { AuthNav } from 'components/AuthNav/AuthNav';

export default function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <h1 className={styles.title}>Phonebook</h1>

      <Links to="/">Home</Links>
    
      {isLoggedIn && <Links to="/contacts">Contacts</Links>}
    </div>
  );
}
export const Links = styled(NavLink)`
  display: inline-block;
  margin-left: 10px;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  font-size: 18px;
  color: black;
  &.active {
    color: #ff6b01;
  }
`;
