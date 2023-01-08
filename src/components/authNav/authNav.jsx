import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function AuthNav ()  {
  return (
    <div>
      <Links to="/register">Register</Links>
      <Links to="/login">Log In</Links>
    </div>
  );
};

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
