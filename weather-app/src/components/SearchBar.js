import React, {useEffect, useState} from 'react';


const SearchBar = ({ handleCityChange }) => {

    const [value, setValue] = useState('');

    const handleChange = (value) => {
        setValue(value);
        console.log(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCityChange(value);
        setValue('');
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input placeholder="Search city, state, zip code ..." onChange={(e) => handleChange(e.target.value)} />
                <input type="submit" value="Search" />
            </form>
        </div>
        
    );
}

export default SearchBar;