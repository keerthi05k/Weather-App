import { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");

  function handleCity(evt) {
    setCity(evt.target.value);
  }

  function getWeather() {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=daedb6d61ba712bf484781a39aa157f6&units=metric`
    ).then(function (success) {
      console.log(success.data);
      setWeather(success.data.weather[0].main);
      setDesc(success.data.weather[0].description);
      setTemp(success.data.main.temp);
    });
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-4">Weathery 🌦️</h1>

        <input
          onChange={handleCity}
          type="text"
          placeholder="Enter city name"
          className="w-full p-2 rounded mb-4 text-black outline-none"
        />
        <button
          onClick={getWeather}
          className="w-full bg-white text-blue-700 font-semibold py-2 rounded hover:bg-blue-100 transition"
        >
          Get Weather
        </button>

        {weather && (
          <div className="mt-6 text-left text-white">
            <h3 className="text-lg font-semibold">🌤️ Weather: {weather}</h3>
            <h3 className="text-lg font-semibold">🌡️ Temperature: {temp}°C</h3>
            <h3 className="text-lg font-semibold">📝 Description: {desc}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
