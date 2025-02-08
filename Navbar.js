import React from 'react'
import logo from './image/logo.png'
import './Navbar.css'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li><img src={logo}/></li>
         <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">About us</NavLink></li>
        <li><NavLink to="/">Service</NavLink></li>
        <li><NavLink to="/">Technologies</NavLink></li>
        <li><NavLink to="/">Contact us</NavLink></li>
        <li><NavLink to="/">Get a Quote</NavLink></li>
        <li><NavLink to="/">More</NavLink></li>
        <li>
            <input type="Text" placeholder="Search"/>
            <span className="search-icon"> <FontAwesomeIcon icon={faSearch} /></span>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
