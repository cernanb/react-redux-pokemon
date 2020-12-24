import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.ul`
  li {
    list-style-type: none;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/pokemon">Pokemon</Link>
      </li>
    </StyledNavbar>
  );
};

export default Navbar;
