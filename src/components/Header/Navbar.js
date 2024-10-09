import { Outlet } from "react-router-dom";
import { Link } from "react-scroll";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigbar() {
  return (
    <div class="navbar navbar-fixed-top"style=
    {{color: 'bisque'}}>
      <Navbar>
        <Nav className="navbar-options ">
          <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Skills
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </Nav>
      </Navbar>
      <br />
      <Outlet />
    </div>
  );
}

export default Navigbar;
