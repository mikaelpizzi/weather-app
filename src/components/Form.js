import React, { useState } from 'react'

const Form = (props) => {
    // Form state
    const [search, saveSearch] = useState({
        city: '',
        country: ''
    });

    // Extract city and country
    const { city, country } = search;

    // Puts elements in state
    const handleChange = e => {
        // Update state
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    return ( 
        <form>
            <div className='input-field col s12'>
                <input
                    type='text'
                    name='city'
                    id='city'
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor='city'>City: </label>
            </div>

            <div className='input-field col s12'>
            <br/><br/>
                <select
                    name='country'
                    id='country'
                    value={country}
                    onChange={handleChange}
                >
                    <option value='' disabled selected>-- Select a Country --</option>
                    <option value="US">United States</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">Spain</option>
                    <option value="PE">Peru</option>
                    <option value="VE">Venezuela</option>
                    <option value="IT">Italy</option>
                    <option value="EE">Estonia</option>


                </select>
                
                <label>Country: </label>
            </div>
        </form>
     );
}
 
export default Form;