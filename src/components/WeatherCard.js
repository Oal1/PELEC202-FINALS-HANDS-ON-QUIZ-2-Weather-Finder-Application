import "./WeatherCard.css";

function WeatherCard({ weather, loading, error }) {
  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="error">City not found. Please try again.</p>;
  }

  if (!weather) {
    return null;
  }

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;