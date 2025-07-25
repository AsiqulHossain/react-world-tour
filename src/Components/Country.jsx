import React, { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    const{name, flags,population,area} =country;
    const[visited,setVisited]=useState(false);
    
    const handleVisited=()=>{
        setVisited(true);
    }
    return (
        <div className='country'>
            
            <h3>Name:{name?.common}</h3>
           <img src={flags.png} alt="" />
           <p>Population:{population}</p>
           <p>area: {area}</p>
           <button onClick={handleVisited}>Visited</button> 
           {visited && 'I have visited this country.'

           }
        </div>
    );
};

export default Country;