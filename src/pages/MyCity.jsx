import React, { useEffect, useState } from 'react';

function MyCity() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('https://api.weatherapi.com/v1/current.json?key=c4262607e3704d3496795100251806&q=Kyiv&lang=uk')
      .then(res => res.json())
      .then(data => setWeather(data));
  }, []);

  return (
    <section>
      <h1>Моє місто — Київ</h1>
      <p>Київ — столиця України, велике культурне та історичне місто.</p>
      {weather ? (
        <div>
          <h2>Погода зараз</h2>
          <p>Температура: {weather.current.temp_c} °C</p>
          <p>Опис: {weather.current.condition.text}</p>
          <p>Координати: {weather.location.lat}, {weather.location.lon}</p>
          <p>Місто: {weather.location.name}, {weather.location.country}</p>
        </div>
      ) : (
        <p>Завантаження погоди...</p>
      )}
    </section>
  );
}

export default MyCity;
