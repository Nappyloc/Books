import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './App.css';
import Media from './components/Media'
import Header from './components/Header'

class App extends Component 
{
  state = {
    query: '',
    items: []
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
  };
  //Search Function    
  search = event => 
  {
    //prevent the screen from refreshing    
    event.preventDefault()
    // URL for google books api
    const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    // Fetch the data from google using the GET
    fetch( `${ URL }${ this.state.query }`, { method: 'GET' } )
      // return the Json data
      .then( res => res.json() )
      // Update items state to equal the Json data
      .then( json => { let { items } = json; this.setState( { items } ) } )
    // log the search input
    console.log( 'search', this.state.query );
    // reset the query to an empty value
    this.setState( { query: '' } );
    this.clearEntry()
  }



  // Page Load
  render ()
  {

    return (
      
      <MDBContainer className="mt-5 text-center">
        {/* Navication/Header */}
        <Header/>
        {/* Search Bar */}
        <MDBRow md="12">
          <MDBCol size="4">
            <div className="md-form my-0">
              <input 
              className="form-control search mr-sm-2" 
              name="query" value={this.state.query} 
              type="text" 
              ref={el => this.inputEntry = el} 
              placeholder="Search" 
              aria-label="Search" 
              onChange={this.inputChange}
               />
              </div>
            </MDBCol>
            {/* Search Button */}
            <MDBCol>
              <MDBBtn gradient="purple" 
              rounded size="sm" 
              type="submit" 
              className="mr-auto" 
              onClick={this.search}
              >
                Search
              </MDBBtn>
            
          </MDBCol>
        </MDBRow>

        {/* Search Results */}
        <Media items={this.state.items} />
      </MDBContainer>
    );
  }
}

export default App;
