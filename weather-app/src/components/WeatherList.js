import React from 'react';
import WeatherCard from './WeatherCard.js';

const WeatherList = ({ listData }) => {
    return (
        <div className="weather-list">
            { (listData !== undefined)
            ? (listData.slice(0,5).map((element, index) => {
                console.log(element.main.temp);
                console.log(element.weather[0].description);
                console.log(element.dt_txt);
                return (
                    <WeatherCard key={index} temperature={element.main.temp} weather={element.weather[0].description} time={element.dt_txt} />
                )
            })) : (
                <div>Cannot Find City</div>
            )
        }
        </div>
    );
}

export default WeatherList;