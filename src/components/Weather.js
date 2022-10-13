import React from 'react'

const Weather = ({ result }) => {
    // Extract the values
    const { name, main } = result;

    if (!name) return null;
    return ( 
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>The weather of {name} is </h2>
                <p className='temperatura'>
                    {main.temp}
                </p>
            </div>
        </div>
    );
}
 
export default Weather;