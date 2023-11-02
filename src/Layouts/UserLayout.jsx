import React from 'react'
import  { Outlet } from 'react-router-dom'
import Navbar from '../Component/Navbar/Navbar'


function UserLayout() {
  return (
    <>
      <Navbar/>
      <Outlet></Outlet>
    </>
  )
}

export default UserLayout
