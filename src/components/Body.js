import React from 'react'
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='flex mx-2  px-3'>
    <Sidebar className="sticky top-0"/>
    <Outlet/></div>
  )
}

export default Body;