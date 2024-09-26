import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigbar() {
  return (
    <div class="navbar transparent navbar-fixed-top">
      <Navbar >
          <Nav className="navbar-options ">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </Nav>
       
      </Navbar>
      <br />
    </div>
  );
}

export default Navigbar;