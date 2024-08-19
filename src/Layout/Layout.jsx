import React from 'react'
import Foother from '../companents/Foother'
import Navbar from '../companents/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Foother/>
    </>
  )
}

export default Layout