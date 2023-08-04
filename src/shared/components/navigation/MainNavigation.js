import React from 'react'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import './MainNavigation.css'
function MainNavigation() {
  return (
    <MainHeader>
        <button className='main-navigation__btn'>
          <span/>
          <span/>
          <span/>
        </button>   
        <h1 className='main-navigation__title'><Link to='/'>KIMDEV</Link></h1>
        <nav className='main-navigation__header-nav'>
            <NavLinks/>
        </nav>
    </MainHeader>
  )
}

export default MainNavigation