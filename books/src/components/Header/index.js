import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBContainer } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Header extends React.Component
{
    constructor( props )
    {
        super( props );
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind( this );
    }

    onClick ()
    {
        this.setState( {
            collapse: !this.state.collapse,
        } );
    }

    render ()
    {
        const container = { height: 100 }
        return (
            <div>
                <Router>
                    <header>
                        <MDBNavbar className="purple-gradient" dark expand="md">
                            <MDBNavbarBrand href="/">
                                <strong>Google Books</strong>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={this.onClick} />
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBNavLink to="#"><MDBIcon fab icon="google" /></MDBNavLink>
                                    </MDBNavItem><MDBNavItem>
                                        <MDBNavLink to="#"><MDBIcon fab icon="google-play" /></MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#"><MDBIcon fab icon="google-plus" /></MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </header>
                </Router>
                <MDBContainer style={container} className="text-center mt-5">
                    <h2>Google Book Search</h2>
                    <h5>Find your piece of literary comfort</h5>
                </MDBContainer>
            </div>
        );
    }
}

export default Header;