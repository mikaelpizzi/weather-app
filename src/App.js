import React, { Fragment, useState, useEffect } from 'react'
import Form from './components/Form';
import Header from './components/Header';

function App() {
    // Form state
    const [search, saveSearch] = useState({
      city: '',
      country: ''
    });

    const [query, saveQuery] = useState(false);

    const { city, country } = search;

    useEffect(() => {
      const consultAPI = async () => {
        if (query) {
          const apiKey = 'b933ce50646b38f2fc52f17d233eb5cb';
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;
  
          const response = await fetch(url);
          const result = await response.json();
  
          console.log(result);
        }
      }
      consultAPI();
    }, [query])

  return (
    <Fragment>
      <Header
        title="Weather App"
      />

      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Form 
                search={search}
                saveSearch={saveSearch}
                saveQuery={saveQuery}
              />
            </div>
            <div className='col m6 s12'>
              2
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  );
}

export default App;
