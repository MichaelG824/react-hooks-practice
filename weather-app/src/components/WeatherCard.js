import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faCoffee, faCloud, faRain } from '@fortawesome/free-solid-svg-icons'

const WeatherCard = ({temperature, weather, time}) => {
    const getIcon = (weather) => {
        if (weather.includes("cloud")) {
            return (
                <FontAwesomeIcon icon={faCloud} />
            );
        } else if (weather.includes("rain")) {
            return (
                <FontAwesomeIcon icon={faCoffee} />
            );
        } else {
            return (
                <FontAwesomeIcon icon={faSun} />
            );
        }
    }

    const getFahrenheight = (temperature) => {
        return Math.floor((temperature - 273.15) * (9/5) + 32);
    }

    return (
        <div className='weather-card'>
            <Card style={{ width: '15rem' }}>
            <div className='Icon'>
                {getIcon(weather)}
            </div>
            
            <Card.Body>
                <Card.Title>{time}</Card.Title>
                <Card.Text>
                {getFahrenheight(temperature)} F
                </Card.Text>
                <Card.Text>
                {weather}
                </Card.Text>
            </Card.Body>
        </Card>
        <link 
  href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css" 
  rel="stylesheet"  type='text/css'></link>
        </div>
    );
}

export default WeatherCard;