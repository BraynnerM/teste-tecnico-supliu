import React from 'react'
import {FiSettings} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import "./index.css"

const Header = () => {
  return (
    <header className='header'>
      <Link to={`/`}>
        <img src='./assets/logo.png' alt='logo'/>
      </Link>
      <div className='settings-box'>
      <Link to={`/`} >
        <h2>Discografia</h2>
      </Link>
      <Link to={`/settings`}>
        <FiSettings size={40} color="#3f3f3f" className='gear'/>
      </Link>
            
      </div>
      
      
      
    </header>  
  )
}

export default Header