import React from 'react';
import { Container, Nav, Navbar, NavDropdown, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Headers = () => {
    const { allContexts } = useAuth();
    const { user, logOut } = allContexts;
    const { displayName, photoURL, email } = user;
    return (
        <div style={{ height: '100%' }} className="sticky-top shadow-lg">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand style={{fontSize:'30px', fontWeight:'Bold', fontStyle:'italic'}}>BikeMania</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav-link me-auto">
                            <Nav.Link style={{ fontSize: '16px', fontWeight:'bold'}} as={NavLink} to="/home">HOME</Nav.Link>
                            
                            
                            <Nav.Link style={{ fontSize: '16px', fontWeight: 'bold' }} as={NavLink} to="/explore">EXPLORE PRODUCTS</Nav.Link>
                            
                            <Nav.Link style={{ fontSize: '16px', fontWeight:'bold'}} as={NavLink} to="/dashboard">DASHBOARD</Nav.Link>
                            

                        </Nav>


                        {!email ? (


                            <Nav>
                               
                                <Nav.Link style={{ fontSize: '16px', fontWeight: 'bold' }} as={NavLink} to="/login">login</Nav.Link>
                            </Nav>

                        )

                            : (
                                <Nav className="ms-auto">
                                    <NavDropdown title={
                                        photoURL  ?
                                            <img
                                                style={{
                                                    width: '45px',
                                                    borderRadius: '50%',
                                                    border: '2px solid white'
                                                }}
                                                src={photoURL} alt=""
                                            />

                                            :
                                           displayName
                                            

                                    }

                                    >
                                        <div className="p-5 text-center">
                                            <h6>{displayName}  </h6>
                                            <h6>Email: {email} </h6>
                                            <br />
                                            <button onClick={logOut} className="btn btn-outline-dark">
                                                LogOut
                                            </button>
                                        </div>

                                    </NavDropdown>
                                </Nav>
                            )}
                        


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Headers;