import React, { Component } from 'react';
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol,  MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
import './App.css';
import InputField from './components/InputField'

class App extends Component 
{
  

  render () {

  return (
    <MDBContainer className="mt-5 text-center">
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
    <InputField/>
  </MDBContainer> 
  );
}
}

export default App;
