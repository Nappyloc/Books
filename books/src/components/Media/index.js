import React, { Component } from 'react'
import { MDBMedia, MDBContainer } from 'mdbreact';


class Media extends Component
{
    render ()
    {
        let missing = "https://res.cloudinary.com/dking14/image/upload/v1598040483/Books%20Search/book-icon-white-28_iwq3ve.jpg"

        return (
            <MDBContainer>
                {
                    this.props.items.map( ( items, index ) =>
                    {
                        let { title, imageLinks, infoLink } = items.volumeInfo;
                        return (
                            <MDBMedia key={index} className="p-3">
                                <MDBMedia >
                                    <img src={imageLinks !== undefined ? imageLinks.thumbnail : missing } alt="book icon" />
                                </MDBMedia>
                                
                                <MDBMedia body>
                                    <MDBMedia heading>
                                        {title}
                                    </MDBMedia>
                                    {infoLink}
                                </MDBMedia>
                                
                            </MDBMedia>


                        )
                    } )
                }
            </MDBContainer>
        )
    }
}
export default Media;