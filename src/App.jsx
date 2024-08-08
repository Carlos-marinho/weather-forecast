import { useRef, useState } from 'react'
import axios from 'axios'
import WeatherInformations from './components/WeatherInformations'
import WeatherForecast from './components/WeatherForecast'

function App() {
  const API_KEY = "9b4f3141d26f73b08f6c33588bd73989"
  const [lang, setLang] = useState("en_us")
  const inputRef = useRef()
  const [weather,setWeather] = useState()
  const [weather5days,setWeather5days] = useState()

  async function handleSearch() {
    try {
      const city = inputRef.current.value
      const api = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=${lang}`)
      const api5days = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=${lang}`)
      setWeather(api.data)
      setWeather5days(api5days.data)
        
    } catch (error) {
      console.log(error)
    }
  }           

  return (
    <div className='w-full h-full bg-blue-400'>
      <div className="flex flex-col w-8/12 mx-auto justify-center items-center gap-y-4">
        <h1 className='text-5xl font-extrabold text-white my-10'>Weather Forecast</h1>
        <input className='shadow-md px-2 py-1 rounded-lg outline-none' ref={inputRef} type="text" placeholder='Enter a city name' />
        <button className='text-lg px-4 py-2 bg-blue-950 hover:bg-blue-100 hover:text-blue-950 rounded-xl text-white' onClick={handleSearch}>Search</button>
      </div>
    
      {weather && <WeatherInformations weather={weather}/>}
      {weather5days && <WeatherForecast weather5days={weather5days}/>}
    </div>
  )
}

export default App
