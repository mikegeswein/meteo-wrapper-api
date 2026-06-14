import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/weather?latitude=39.1367&longitude=-84.5030&timezone=America/New_York")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  if (!data) return <p style={{ padding: 20 }}>Loading weather...</p>;

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", padding: 40 }}>
      <h1>Weather</h1>

      <h2>{data.current.temperature}°</h2>

      <p>{data.current.weather_icon}</p>

      <p>Wind: {data.current.wind_speed} mph</p>
      <p>Humidity: {data.current.humidity}%</p>

      <hr />

      <p>High: {data.current.today_temperature_max}°</p>
      <p>Low: {data.current.today_temperature_min}°</p>
    </div>
  );
}
