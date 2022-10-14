import React, { useState } from 'react'
import Error from './Error';
import PropTypes from 'prop-types'

const Form = ({ search, saveSearch, saveQuery }) => {
    // Error state
    const [error, saveError] = useState(false);

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

    // When user submits form
    const handleSubmit = e => {
        e.preventDefault();

        // Validate
        if(city.trim() === '' || country.trim() === '') {
            saveError(true);
            return;
        }

        saveError(false);

        // Pass it to principal component
        saveQuery(true);
    }
    return ( 
        <form
            onSubmit={handleSubmit}
        >
            { error ? <Error message='All fields are required' /> : null }
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
                    <option defaultValue="">-- Select a Country --</option>
                    <option value="AR">Argentina</option>
                    <option value="CL">Chile</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="EE">Estonia</option>
                    <option value="IT">Italy</option>
                    <option value="MX">Mexico</option>
                    <option value="ES">Spain</option>
                    <option value="PE">Peru</option>
                    <option value="US">United States</option>
                    <option value="VE">Venezuela</option>


                </select>
                
                <label>Country: </label>

                <div className="input-field col s12">
                    <button 
                        type="submit"
                        name="action"
                        className="waves-effect waves-light btn-large btn-block yellow accent-4 black-text"
                        style={{width: "100%", fontWeight: "600"}}
                    >
                    Search Weather
                    </button> 
                </div>
            </div>
        </form>
     );
}

Form.propTypes = {
    search: PropTypes.object.isRequired,
    saveSearch: PropTypes.func.isRequired,
    saveQuery: PropTypes.func.isRequired
}
 
export default Form;