import React, { Component } from 'react';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBFormInline } from "mdbreact";
import './App.css';
import Media from './components/Media'

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
        {/* JumboTron */}
        <MDBRow>
          <MDBCol>
            <MDBJumbotron className="p-0">
              <MDBCardImage
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg"
              />
              <MDBCardBody>
                <MDBCardTitle className="h3">Google Books Search</MDBCardTitle>
                <MDBCardText>
                  Search for a piece of literary heaven.
            </MDBCardText>
              </MDBCardBody>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
        {/* Search Bar */}
        <MDBCol md="12">
          <MDBFormInline className="md-form mr-auto mb-4">
            <input 
            className="form-control mr-sm-2" 
            name="query" value={this.state.query} 
            type="text" 
            ref={el => this.inputEntry = el} 
            placeholder="Search" 
            aria-label="Search" 
            onChange={this.inputChange} />
            <MDBBtn gradient="purple" 
            rounded size="sm" 
            type="submit" 
            className="mr-auto" 
            onClick={this.search}>
              Search
            </MDBBtn>
          </MDBFormInline>
        </MDBCol>


        <Media items={this.state.items} />
      </MDBContainer>
    );
  }
}

export default App;
