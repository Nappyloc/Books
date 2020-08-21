import React, { Component } from 'react'
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";


class InputField extends Component
{
    state = {
        query: ''
    }

    // Function to log the value of the user input
    inputChange = event =>
    {
        const { name, value } = event.target;
        this.setState( {
            [ name ]: value
        } );
    };

    // Function to clear the input field
    clearEntry = () =>
    {
        this.inputEntry.value = "";
    }

    //Search Function    
    search = event => 
    {
        //prevent the screen from refreshing    
        event.preventDefault()
        // URL for google books api
        const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        fetch( `${ URL }${ this.state.query }`, { method: 'GET' } )
            .then( res => res.json() )
            .then( json => console.log( 'search results: ', json ) )
        // log the search input
        console.log( 'search', this.state.query );
        // reset the query to an empty value
        this.setState( { query: '' } );
        this.clearEntry()


    }
    render ()
    {


        return (
            <MDBCol md="12">
                <MDBFormInline className="md-form mr-auto mb-4">
                    <input className="form-control mr-sm-2" name="query" value={this.state.query} type="text" ref={el => this.inputEntry = el} placeholder="Search" aria-label="Search" onChange={this.inputChange} />
                    <MDBBtn gradient="purple" rounded size="sm" type="submit" className="mr-auto" onClick={this.search}>
                        Search
            </MDBBtn>
                </MDBFormInline>
            </MDBCol>
        )
    }
}

export default InputField;