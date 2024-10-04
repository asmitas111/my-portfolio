import React from 'react'
import Navigbar from './Navbar';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            ASM
          </a>
         
          <div className="collapse navbar-collapse" id="navbarCollapse" style={ {marginLeft: 'auto', marginRight:'30px' }}>
            <Navigbar/>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;