import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <div>
      <h1 className={styles.title}>Phonebook</h1>

      <Links to="contacts">Contacts</Links>
      <Links to="/">Home</Links>
      <Links to="login">Log In</Links>
      <Links to="Register">Register</Links>
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
