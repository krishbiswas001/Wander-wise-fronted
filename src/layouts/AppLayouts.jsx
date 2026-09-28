import React from 'react'
import AppNavbar from '../components/common/AppNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/landingcomponents/Footer'


const AppLayouts = () => {
  return (
    <div>
   <AppNavbar/>
   <Outlet/>
 
  <Footer/>
        
 </div>
  )
}

export default AppLayouts