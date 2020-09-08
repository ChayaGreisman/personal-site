import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';


function NavBar(props){
  return (
    <Navbar fixed='top' style={{width: '100%'}} collapseOnSelect expand="lg" >
        <Navbar.Brand href="#home">Chaya Greisman</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
                <Nav.Link onClick={props.handleShow}>🍦</Nav.Link>
            </Nav>
        </Navbar.Collapse>
  </Navbar>
  );
}

export default NavBar;