import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Login from '../Authorization/Login'
import Create from '../Editing/Create'




export default function BaseNav(props){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="top-fixed">
          <Navbar.Brand href="#home">User Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="mr-auto">
              <Create/>
              <Nav.Link href="#pricing">General Info</Nav.Link>
            </Nav>
            
            <Login />

          </Navbar.Collapse>
        </Navbar>
    )
}




