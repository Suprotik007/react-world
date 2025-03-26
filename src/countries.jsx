import React, { use } from 'react';
import Country from './country';


const Countries = ({countryPromises}) => {
    const countries = use(countryPromises)
    console.log(countries);
    
    
    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>{
                countries.map(country=> <Country country={country}></Country>)
            }
        </div>
    )
};

export default Countries;