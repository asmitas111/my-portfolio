import React from 'react'
import Navigbar from './Navbar';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            ASM
          </a>
         
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <Navigbar/>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;