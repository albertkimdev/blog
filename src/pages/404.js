import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100
    }}
  >
    <h1>This page was not found.</h1>
    <Link to="/">Go to homepage</Link>
  </div>
)

export default NotFoundPage
