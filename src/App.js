import Header from './components/Header'
import Navigation from './components/Navigation';
import Feed from './components/Feed';
import Map from './components/Map';
import Footer from './components/Footer'
import axios from 'axios'
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'

function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState()
  const [currSearch, setCurrentSearch] = useState('')
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const check = localStorage.getItem('weatherSearch')
    if (check) {
      const search = JSON.parse(localStorage.getItem('search'))

      setData(JSON.parse(check))
      setCurrentSearch(search)
    }
  }, [])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const ENDPOINT = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${process.env.REACT_APP_WEATHER_KEY}`

    axios(ENDPOINT)
    .then((response) => {
      setData(response.data)
      setError('')
      localStorage.setItem('weatherSearch', JSON.stringify(response.data))
      localStorage.setItem('search', JSON.stringify(response.data.city.name))
    })
    .catch((error) => {
      setError(error)
      setData()
    })

    setCurrentSearch(search)
    setSearch('')
  }
  return (
    <main className="app">
      <Header />
      <section className='contents-container'>

        {/* {currSearch && <p className='curr-search'>This are the results for:</p>} */}
        <Routes>
          <Route path='/' element={
          <Feed 
            currSearch={currSearch}
            open={open}
            error={error}
            data={data}
            setData={setData}
          />}/>
          <Route path='/weather-map' element={
            <Map 
              open={open} 
              setOpen={setOpen}
            />}/>
        </Routes>

        <Navigation 
          search={search}
          open={open}
          setOpen={setOpen}
          setSearch={setSearch}
          handleSearchSubmit={handleSearchSubmit}
        />
      </section>
      
      <Footer />
      
    </main>
  );
}

export default App;
