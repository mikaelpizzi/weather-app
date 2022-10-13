import React from 'react'

const Weather = ({ result }) => {
    // Extract the values
    const { name, main } = result;
    const kelvin = 273.15;

    if (!name) return null;
    return ( 
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>The weather of {name} is </h2>
                <p className='temperatura'>
                    { parseInt(main.temp - kelvin, 10) } <span>&#x2103;</span>
                </p>
                <p>Max Temperature: 
                    { parseInt(main.temp_max - kelvin, 10) } <span>&#x2103;</span>
                </p>
                <p>Min Temperature: 
                    { parseInt(main.temp_min - kelvin, 10) } <span>&#x2103;</span>
                </p>
            </div>
        </div>
    );
}
 
export default Weather;