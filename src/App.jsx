import { useState } from "react";
import * as weatherService from './services/weatherService';
import WeatherSearch from "./components/WeatherSearch/WeatherSearch";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import './App.css'

const App = () => {
  const [weather, setWeather] = useState({});

  const fetchData = async (city) => { // eventhandler
    // const data = await weatherService.show('New York');
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
    // console.log('Data:', data); //not all of it, three  piece of infor
  };
  console.log('State:', weather);
  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />

      {/* <button onClick={fetchData}>Fetch Weather Data</button> */}
    </main>
  );
}

export default App