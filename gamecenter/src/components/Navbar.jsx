import React, { } from 'react'
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"

const NavbarComponent = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to='/'>Game Center</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/'>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to='/favorites'>
                                Favorites
                        </Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-dark">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavbarComponent