import React from 'react'
import Navbar from '../components/layout/navbar'
import Footer from '../components/layout/footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
<Footer/>
    </>
  )
}

export default MainLayout