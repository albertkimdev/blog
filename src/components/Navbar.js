import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavCont = styled.nav`
  width: 90%;
  display: flex;
  justify-content: center;
  position: absolute;
  a {
    color: #f1c40f;
    padding: 1rem;
  }
  span {
    display: none;
  }
  @media (max-width: 800px) {
    justify-content: flex-start;
    a {
      display: none;
    }
    span {
      padding: 1rem;
      display: block;
      color: #f1c40f;
    }
  }
`;

const Navbar = () => (
  <nav className="navbar has-background-warning">
    <div className="container">
      <div className="navbar-brand center-it">
        <Link to="/" className="navbar-item">
          <h1 className="title has-text-info">Yongelee</h1>
        </Link>
      </div>
      <div className="navbar-end center-it">
        <Link className="navbar-item" to="/">
          Articles
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/work">
          Work
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
