import React, { useState } from 'react'
import MainHeader from './MainHeader'
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import Sidedrawer from './Sidedrawer'
import Backdrop from '../../UIelements/Backdrop'
import './MainNavigation.css'
function MainNavigation() {
  const[drawerIsOpen, setDrawerIsOpen] = useState(false)
  const openDrawerHandler = ()=>{
    setDrawerIsOpen(true)
  }
  const closeDrawerHandler = ()=>{
    setDrawerIsOpen(false)
  }
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
     {drawerIsOpen && <Sidedrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className='main-navigation__drawer-nav'>
          <NavLinks/>
        </nav>
      </Sidedrawer>}
      <MainHeader>
          <button className='main-navigation__btn' onClick={openDrawerHandler}>
            <span/>
            <span/>
            <span/>
          </button>   
          <h1 className='main-navigation__title'><Link to='/'>KIMDEVELOPER</Link></h1>
          <nav className='main-navigation__header-nav'>
              <NavLinks/>
          </nav>
      </MainHeader>
    </React.Fragment>
  )
}

export default MainNavigation