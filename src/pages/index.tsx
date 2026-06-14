import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/weather?latitude=39.1367&longitude=-84.5030&timezone=America/New_York")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  if (!data) return <p style={{ padding: 20 }}>Loading weather...</p>;

  const weather = data as any;

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", padding: 40 }}>
      <h1>Weather</h1>

      <h2>{weather.current.temperature}°</h2>

      <p>{weather.current.weather_icon}</p>

      <p>Wind: {weather.current.wind_speed} mph</p>
      <p>Humidity: {weather.current.humidity}%</p>

      <hr />

      <p>High: {weather.current.today_temperature_max}°</p>
      <p>Low: {weather.current.today_temperature_min}°</p>
    </div>
  );
}
