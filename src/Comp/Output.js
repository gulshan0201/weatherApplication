import React from 'react'
import {Card} from 'react-bootstrap';

const Output = ({text}) => {
  const current = new Date();
  const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem"}}>
    <Card border="primary" style={{ width: '18rem', marginRight: "5rem"}}>
        <Card.Header> <h4>Current Weather</h4> </Card.Header>
        <Card.Body>
          <Card.Text>
          <p>Temperature: {text.temp.toFixed()} &deg;C</p>
           <p>Description: {text.description}</p> 
           <p>Feels Like: {text.feels_like}</p>
           <p>Date:  {date}</p>
          </Card.Text>
        </Card.Body>
      </Card>

    <Card border="primary" style={{ width: '18rem',}}>
        <Card.Header>Weather Description</Card.Header>
        <Card.Body>
          <Card.Text>
            <p>Temp Max: {text.temp_max} &deg;C</p>
           <p>Temp Min: {text.temp_min} &deg;C</p> 
           <p>Humidity: {text.humidity}</p> 
           <p>Sunrise: {text.sunrise}</p> 
           <p>Sunset: {text.sunset}</p> 
           <p>Wind Speed: {text.wind}</p> 
           
          </Card.Text>
        </Card.Body>
      </Card>

   
    </div>
  )
}

export default Output