import React from 'react'
import Helmet from 'react-helmet'

import favicon from '../img/favicon.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'
import './styles.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Yongelee | THE Blog!</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="My blog where I share my thoughts about startups, coding, technology, philosophy and other topics."
      />
      <meta charSet="utf-8" />
      <link rel="icon" type="image/png" href={favicon} />
    </Helmet>
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
