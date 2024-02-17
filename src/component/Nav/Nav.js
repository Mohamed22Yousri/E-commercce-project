import React from 'react'
import { Container, Nav , Navbar } from 'react-bootstrap'
import logo from './../../img/images.png'
import './Nav.css'

const Navs = () => {
  return (
    <Navbar expand="lg" className='m'>
        <Container>
  <Navbar.Brand href="#home" className='logo'>
    <img src={logo} alt=''/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link  href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About Us</Nav.Link>
      <Nav.Link href="#home">Explore Food</Nav.Link>
      <Nav.Link href="#link">Review</Nav.Link>
      <Nav.Link href="#link">FAQ</Nav.Link>
    
    </Nav>
    <Nav>
      <Nav.Link className='lastNav' href="#deets">339557139</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navs