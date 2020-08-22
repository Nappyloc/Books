import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBContainer } from 'mdbreact';

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

                <header>
                    <MDBNavbar className="purple-gradient" dark expand="md">
                        <MDBNavbarBrand href="/">
                            <strong>Google Books</strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.onClick} />
                        <MDBCollapse isOpen={this.state.collapse} navbar>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBNavLink to="google.com"><MDBIcon fab icon="google" /></MDBNavLink>
                                </MDBNavItem><MDBNavItem>
                                    <MDBNavLink to="play.google.com"><MDBIcon fab icon="google-play" /></MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </header>

                <MDBContainer style={container} className="text-center mt-5">
                    <h2>Google Book Search</h2>
                    <h5>Find your piece of literary comfort</h5>
                </MDBContainer>
            </div>
        );
    }
}

export default Header;