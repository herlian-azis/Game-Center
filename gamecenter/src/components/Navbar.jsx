import React, {  useState } from 'react'
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap'
import { Link ,useHistory } from "react-router-dom"

const NavbarComponent = () => {
    const [search, setSearch] = useState()
    const history = useHistory()
    
    const doSearch = (e)=>{
        e.preventDefault()
        history.push(`/${search}`)
    }
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
                    </Nav>
                    <Form inline onSubmit={(e)=> doSearch(e)}>
                        <FormControl 
                            value={search}
                            
                            onChange={(e)=> setSearch(e.target.value) }

                            type="text" placeholder="Search" className="mr-sm-2" />
                                
                        <Button  type='submit' variant="outline-dark">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavbarComponent