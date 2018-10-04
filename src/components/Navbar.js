import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1 className="title has-text-primary">
            Yongelee{' '}
            <span className="is-size-5">
              {' '}
              - My blog about UI/UX, startups, coding, & more
            </span>
          </h1>
        </Link>
      </div>
      <div className="navbar-end">
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
