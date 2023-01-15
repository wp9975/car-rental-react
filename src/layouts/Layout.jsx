import React, { Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navigation/NavbarO'
import Routers from '../config/Routes'


const Layout = () => {
  return (
    <Fragment>
      <Navbar/>
      <div>
            <Routers/>
      </div>
      <Footer/>
    </Fragment>
  )
}

export default Layout