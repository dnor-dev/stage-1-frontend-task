import React from 'react'
import Footer from './Footer'
import '../styles/App.css'
import '../styles/index.css'

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
