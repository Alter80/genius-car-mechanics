import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/home#home"><strong>GCM</strong></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='text-white' as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='text-white' as={Link} to="/home#services">Services</Nav.Link>
                        <Nav.Link className='text-white' as={Link} to="/home#experts">Experts</Nav.Link>

                        <Nav.Link className='text-white' href="/login">Login</Nav.Link>

                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </>
    );
};

export default Header;