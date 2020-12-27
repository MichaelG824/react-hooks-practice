import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import '../css/Searchbar.css';

function SearchBar() {
  const [value, setValue] = useState('');
  const [countries, setCountries] = useState([]);
  const [persistentCountryData, setPersistentCountryData] = useState({});
  const [isFocused, setFocused] = useState(false);

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then((results) => {
      setPersistentCountryData({});
      if (results.Countries === undefined) {
        setCountries([]);
      } else {
        const new_countries = results.Countries.filter(country => country.Country.includes(value));
        setCountries(new_countries);
      }
    });
  }, [value]);



  const handleClickCountry = (country) => {
    const new_object = {
      country: country.Country,
      TotalCases: country.TotalConfirmed,
      TotalDeaths: country.TotalDeaths,
      TotalRecovered: country.TotalRecovered
    }

    setCountries([]);
    setPersistentCountryData(new_object);
  }

  return (
    <div className="SearchBar">
      <form >
        <input className="Form" placeholder='Enter country for stats' onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onChange={(e) => setValue(e.target.value)} />
      </form>
      <div>
          <ul>
            {(isFocused) ? countries.slice(0,14).map((country, index) => {
                return <li key={index} onMouseDown={() => handleClickCountry(country)}>{country.Country}</li>
            }) : ''}
          </ul>
        
      </div>
      <div>
        {(!_.isEmpty(persistentCountryData)) ? 
          (
            <div>
              <h2>Total Cases in {persistentCountryData.country}: {persistentCountryData.TotalCases} </h2>
              <h2>Total Deaths in {persistentCountryData.country}: {persistentCountryData.TotalDeaths} </h2>
              <h2>Total Recovered in {persistentCountryData.country}: {persistentCountryData.TotalRecovered}</h2>
            </div>
          ) : ''
        }
      </div>
      
    </div>
  );
}

export default SearchBar;
