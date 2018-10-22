import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand center-it">
        <Link to="/" className="navbar-item">
          <h1 className="title has-text-primary">Yongelee</h1>
        </Link>
      </div>
      <div className="navbar-end center-it">
        <Link className="navbar-item" to="/">
          Posts
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
