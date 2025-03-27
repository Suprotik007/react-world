import React, { useState } from 'react';

const Country = ({country , handleVisitedCountries}) => {
  
    
    
    const[visited,setVisited]=useState(false)
    const handleVisit=()=>{
//         if (visited ===true) {
// setVisited(false)}
// else{
// setVisited(true)
// }
setVisited(!visited)
handleVisitedCountries(country)
    }
    
    
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name : {country.name.common}  
                <img className='flag' src={country.flags.png} alt="" /> 
                <p style={{color:'aquamarine'}}>Official : {country.name.official}</p>
                <p style={{color: country.independent ? 'green' : 'red'
    }}>{country.independent? "Free" : "Not Free"}</p>
   
    
    </h3>
    <div style={{color:"darkcyan"}}>
    <h3>Population : {country.population}</h3>
    <h3>Area : {country.area}</h3>
    <h3>Region: {country.region}</h3>
    <h3>Sub-region: {country.subregion}</h3> <br />
    <button className={visited ? 'btn-visited' : "btn-not-visited"} onClick={handleVisit}>{visited ? 'visted' :"Not Visited"}</button>

    </div>
    <div style={{color: "gold"}}>
    <h3>Timezone : {country.timezones}</h3>
    <h3>Capital : {country.capital}</h3>
    <h3>Holiday: {country.startOfWeek}</h3>
    
    </div>

    
        </div>
        
    );
};

export default Country;