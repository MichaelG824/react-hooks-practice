import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar.js';
import WeatherList from './components/WeatherList.js';

function App() {
  const [url, setURL] = useState('');
  const [listData, setListData] = useState([]);
  useEffect (() => {
    fetch(url).then((response) => 
      response.json()
    ).then
    ((results) => {
      console.log(typeof results.list);
      setListData(results.list);
    })
  }, [url]);
  

  const handleCityChange = (value) => {
    setURL(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=809a7a1ad6ba1d94b0c79968a881da00`);
    console.log("Hit");
  }

  return (
    <div className="App">
      <h1>5 Day Forecast</h1>
      <SearchBar handleCityChange={handleCityChange} />
      <WeatherList listData={listData} />
    </div>
  );
}

export default App;
