import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNav = () => {
  return (
    <div>
      <Links to="/register">Register</Links>
      <Links to="/login">Log In</Links>
    </div>
  );
};

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
