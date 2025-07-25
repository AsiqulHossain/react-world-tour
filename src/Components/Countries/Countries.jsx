import { useEffect, useState } from "react";
import Country from "../Country";

const Countries = () => {
    const [countries,setCountries] = useState([]);

    useEffect(()=>{
     fetch('https://restcountries.com/v3.1/independent?status=true')
     .then(res => res.json())
     .then(data => setCountries(data));

    } ,[])
    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            {
                countries.map(country=><Country 
                    country={country}></Country>)
            }
        </div>
    );
};

export default Countries;