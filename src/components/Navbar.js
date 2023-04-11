import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';
// import React, {useState} from 'react';

 function Navigation() {
    return(
        
        <div className="container-fluid bg">
          <Navbar collapseOnSelect expand="lg">
          {/* <Container fluid className="bg"> */}
          <Navbar.Brand>kKyser</Navbar.Brand>
              <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
              <Navbar.Collapse id="responsive-navbar-nav" className="customnav">
                <Nav collapseOnSelect className="navbar-nav">
                      <NavLink to="/" className={({ isActive, isPending}) => isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"}>Home</NavLink>
                      <NavLink to="/About" className={({ isActive, isPending}) => isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"}>About</NavLink>
                      <NavLink to="/Works" className={({ isActive, isPending}) => isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"}>Works</NavLink>
                      <NavLink to="/Contact" className={({ isActive, isPending}) => isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"}>Contact</NavLink>
                </Nav>
              </Navbar.Collapse>
              
              

          {/* </Container> */}
          
          </Navbar>
                  
                


        </div> 
       
    );
}

export default Navigation;