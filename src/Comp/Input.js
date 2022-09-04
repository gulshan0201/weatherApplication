import {React, useState} from 'react'
import axios from 'axios'
import Output from './Output'
import { Button } from 'react-bootstrap'

const Input = () => {
  const [city, getCity] = useState("")
  const [data, setData] = useState({
    description: "",
    temp: 0,
    feels_like: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    wind:0,
  },)

  const handelClick = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4899f968437a176c7964359daebaa732`)
    .then((response) => {
      console.log(response.data)
      setData({
        description: response.data.weather[0].description,
        temp:response.data.main.temp,
        feels_like:response.data.main.feels_like,
        temp_max:response.data.main.temp_max,
        temp_min:response.data.main.temp_min,
        humidity:response.data.main.humidity,
        sunrise:response.data.sys.sunrise,
        sunset:response.data.sys.sunset,
        wind:response.data.wind.speed,
      })
    })
  }

  return (
      <div className='text-center'>
    <div className='Container text-center my-3'>
      <h1>Weather Application</h1>
      <input type="text" className="from-control" value={city}  onChange={(e) => {
        getCity(e.target.value)
      }}></input>
      <Button className='mx-2' variant="primary" type="submit" onClick={handelClick}>Search</Button>
      
    </div>
      <div className={{padding: "10px"}}>
        <Output text={data}/>
      </div>
      </div>
  )
}

export default Input