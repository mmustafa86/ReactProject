import React, { Component } from 'react';
import { MDBCol, MDBFormInline, MDBBtn , MDBIcon ,MDBBadge} from "mdbreact";
import {Container ,Row ,Col} from 'react-bootstrap'
import Location from './location'
import './Marker.css'
import axios from 'axios'
const initialState = {
  airport:'',
 location:''
};

export default class search extends Component {
  constructor(props) {
    super(props);
    this.state =  initialState
  }
 

  recordAirport(event){
    let info=event.target.value;
    console.log(info)
    this.setState({airport: info})

}




  getInfo() {
    const apiKey = "6e8467-016c01";
    const cors = "https://cors-anywhere.herokuapp.com/"

    axios.get(cors + 'https://aviation-edge.com/v2/public/airportDatabase?key=' + apiKey+'&codeIataAirport='+this.state.airport)
      .then(({ data }) => {
          console.log(data)
        this.setState({ location: data })
      })
  }
  submitInfo(event) {
    event.preventDefault()
   
    this.getInfo()


  }


  render() {
    return (
      <Container className="search">
      <Row>
      <Col xs={12} >
        {/* <div className='search'> */}
        <MDBCol md="12">
        <h1><MDBBadge color="light">Search For Airport Location </MDBBadge></h1>
        <MDBFormInline className="md-form">
 
        <MDBIcon icon="search" />
            <input className="form-control mr-sm-4 w-75" type="text" placeholder="Search" aria-label="Search" onChange={(e)=> this.recordAirport(e)}/>
            <MDBBtn color="blue-grey" type="submit" className="mr-auto" onClick={(e)=>this.submitInfo(e)}>
              Search
            </MDBBtn>
          
            
          </MDBFormInline>
          </MDBCol>
        {(this.state.location) ? <Location info={this.state.location}/> 
        : <div></div> }
       
        {/* </div> */}
        </Col>
        </Row>
        </Container>
    );
  }
}
