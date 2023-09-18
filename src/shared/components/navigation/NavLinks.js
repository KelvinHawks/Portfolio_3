import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavLinks.css'
function NavLinks(props) {
  return (
    <ul className='nav-link'>
        <li>
            <NavLink to='/' exact>DOWNLOAD PORTFOLIO</NavLink>
        </li>
        <li>
            <NavLink to='/newproject' exact>NEW PROJECT</NavLink>
        </li>
        <li>
            <NavLink to='/' exact>TWITTER</NavLink>
        </li>
        <li>
            <NavLink to='/' exact>LINKEDLN</NavLink>
        </li>
        <li>
            <NavLink to='/auth' exact>AUTHENTICATE</NavLink>
        </li>
    </ul>
  )
}

export default NavLinks