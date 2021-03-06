import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './pointer'
import './Marker.css'

import {Card ,Container ,Row ,Col} from 'react-bootstrap'
// const AnyReactComponent = ({ text }) => <div>{text}</div>;


const SimpleMap= (props)=> {

const info=props.info

   
const getMapOptions = (maps) => {
  return {
    disableDefaultUI: true,
    mapTypeControl: true,
    streetViewControl: true,
    styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
  };
};




    //   console.log(lat.info)
if(props.info.error){
  return <div></div>
}else  {

    const lat= info[0].latitudeAirport
    const lng= info[0].longitudeAirport
let data = {
   center: {
      lat: lat,
      lng: lng
    }
}
    return (
<div className='map'>
        <Container>
        <Row>
        <Col xs={12}>
      <Card className="text-center">
  <Card.Body>
    <Card.Title>{info[0].nameAirport}</Card.Title>
    <Card.Text>
      TimeZone:{info[0].timezone}
    </Card.Text>
    
  </Card.Body>
  <Card.Footer className="text-muted"></Card.Footer>

    <div  style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC-9dWnwGFLEME5Iqv_3MpS7GUyDnLYTGg'}}
          defaultCenter={data.center}
          defaultZoom={11}
          options={getMapOptions}
        >
          <Marker
            lat={lat}
            lng={lng}
            // text={info[0].codeIataAirport}
            name="My Marker"
            color="blue"
          />
        </GoogleMapReact>
         
        </div>
   
   </Card>
   </Col>
   </Row>
   </Container>
   </div>
    );
    }
  }

export default SimpleMap;
