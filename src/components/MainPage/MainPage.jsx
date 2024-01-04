import React from 'react'
import "./MainPage.css"
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';

const MainPage = () => {
  return (
    <div className='mainPage'>
        <SideBar />
        <Header />
    </div>
  )
}

export default MainPage