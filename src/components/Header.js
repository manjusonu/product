import React from 'react'
import { Navbar, Nav,NavDropdown, Container } from 'react-bootstrap'


function Header() {
  return (
    <div>

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">ABC STORES</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#gallery">GALLERY</Nav.Link>
        <Nav.Link href="#services">SERVICES</Nav.Link>
       
        <Nav.Link href="#contact us">Contact Us</Nav.Link>
        <NavDropdown title="Products" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Add Products</NavDropdown.Item>
          
          <NavDropdown.Item href="#action/3.2">List Products</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Remove Products</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header