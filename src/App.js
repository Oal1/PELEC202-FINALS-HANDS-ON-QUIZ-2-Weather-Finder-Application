import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const API_KEY = "18919884313570bf428e2b89a74a8c13";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchWeather(city) {
    setLoading(true);
    setError(false);
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <h1 className="title">Simple Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      <WeatherCard weather={weather} loading={loading} error={error} />
    </div>
  );
}

export default App;