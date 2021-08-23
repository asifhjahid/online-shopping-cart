import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap';
import './NavMenu.css'

export default function NavMenu() {
    return (
        <div className='navFixed'>
            <Navbar  bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Art Gallery</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Top-up</Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
            </Nav>
            </Container>
            </Navbar>
        </div>
    )
}
