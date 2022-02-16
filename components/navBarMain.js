import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/loginAction'
import Link  from 'next/link'


const NavBar = () => {

    const dispatch = useDispatch()
    const { loginReducer, loadingReducer } = useSelector(state => state)
    const handleLogOut = () => {
        dispatch(logout())
        localStorage.removeItem('login')
    }
      
    return (
            <Navbar bg="dark" className="navbar-main" expand="lg" sticky="top">
                <Container fluid>
                    <Link href="/"><Navbar.Brand className="navbar-logo">FaceGram</Navbar.Brand></Link>

                    
                    <Nav style={{paddingLeft: "1000px"}}>
                        {
                            loginReducer.login ? 
                                <Nav.Link> {loginReducer.authority} | </Nav.Link>:
                                <div></div>

                        }
                        
                    </Nav>
                    <Form className="d-flex">
                        {
                            loginReducer.login ? 
                            <Button  onClick={handleLogOut} variant="outline-success">Log Out</Button>:
                            <Link href="/login   "><Button variant="outline-success">Login</Button></Link>
                        }
                    </Form>

                </Container>
                </Navbar>
    )
}

export default NavBar