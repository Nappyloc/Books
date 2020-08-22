import React, {Component} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem,MDBIcon, MDBContainer } from 'mdbreact';
import './style.css'

class Header extends Component
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
                                <a className="google" href="http://www.google.com" target="_blank" rel="noopener noreferrer"><MDBIcon fab icon="google" /></a>
                                </MDBNavItem><MDBNavItem>
                                <a className="google" href="http://play.google.com" target="_blank" rel="noopener noreferrer"><MDBIcon fab icon="google-play" /></a>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </header>

                <MDBContainer style={container} className="text-center mt-5">
                    <h2>Google Book Search</h2>
                    <h5>Search for a book below to find your piece of literary comfort</h5>
                </MDBContainer>
            </div>
        );
    }
}

export default Header;