import React, { use, useState } from 'react';
import Country from './country';


const Countries = ({countryPromises}) => {
    const[ visitedCountries,setVisitedCountries]=useState([])
    const countries = use(countryPromises)
    console.log(countries);
    const handleVisitedCountries=(country)=>{
        console.log(country);
        const newVisitedCountries=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
    }
    
    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            <h1>Traveled so far :{visitedCountries.length} </h1>
            <ol>
                <h3 style={{color:"orange"}}>{visitedCountries.map(country=> <li>{country.name.common}</li>)}</h3>
            </ol>
            {
                countries.map(country=> <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} country={country}></Country>)
            }
            
        </div>
    )
};

export default Countries;