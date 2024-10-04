import { NavLink, Outlet } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigbar() {
  return (
    <div class="navbar navbar-fixed-top">
      <Navbar >
          <Nav className="navbar-options ">
            <NavLink to="/HomePage">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
          </Nav>
       
      </Navbar>
      <br />
      <Outlet />
    </div>
  );
}

export default Navigbar;