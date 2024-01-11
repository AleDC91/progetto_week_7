import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/NavbarComponent.css";
import LogoComponent from "./LogoComponent";


export default class NavbarComponent extends Component {
  render() {
    return (
      <Navbar expand="lg" className=" navbar-netflix texr-white" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <LogoComponent />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  className="toggle-menu-btn " />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                Tv Shows
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                Movies
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                My List
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* <p className="text-white">ciao</p> */}
        </Container>
      </Navbar>
    );
  }
}
