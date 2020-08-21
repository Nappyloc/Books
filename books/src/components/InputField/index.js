import React, { Component } from 'react'
import { MDBCol,MDBFormInline, MDBBtn  } from "mdbreact";


class InputField extends Component
{
    state = {
        query: ''
    }
    
    search () {
        console.log('search');
      }
    render() {

    
    return (
        <MDBCol md="12">
      <MDBFormInline className="md-form mr-auto mb-4">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={event => this.setState({query: event.target.value})} />
            <MDBBtn gradient="purple" rounded size="sm" type="submit" className="mr-auto" onClick={() => this.search()}>
            Search
            </MDBBtn> 
        </MDBFormInline>
    </MDBCol>
    )
    }
}

export default InputField;