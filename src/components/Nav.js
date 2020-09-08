import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';



function NavBar(props){

    
  return (
    <Navbar fixed='top' style={{width: '100%'}} collapseOnSelect expand="lg" >
        <Navbar.Brand onClick={()=>props.history.push('/')}>Chaya Greisman</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#" onClick={()=>props.history.push('/about')}>About</Nav.Link>
                <Nav.Link href="#">Projects</Nav.Link>
                <Nav.Link href="#">Resume</Nav.Link>
                <Nav.Link href="#" onClick={props.handleShow}>🍦</Nav.Link>
            </Nav>
        </Navbar.Collapse>
  </Navbar>
  );
}

export default NavBar;