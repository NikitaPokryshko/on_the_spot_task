import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  font-size: 1.25rem;
  text-decoration: none;
  color: #f38181;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  position: relative;
  font-weight: bold;
  :hover {
    color: #d03161;
  }
`;

export default NavLink;
