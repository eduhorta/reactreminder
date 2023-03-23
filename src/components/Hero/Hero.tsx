import React, { useState, useEffect } from 'react';
import heroImage from '../../assets/images/Hero.png';
import axios from 'axios';
import WindIcon from '../../assets/images/icon-wind.png';
import HumidityIcon from '../../assets/images/icon-humidity.png';
import RainProbIcon from '../../assets/images/icon-rain-prob.png';

function Hero() {
  interface OpenWeather {
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    main: {
      humidity: number;
    };
  }
  interface OpenMeteo {
    current_weather: {
      temperature: number;
      windspeed: number;
    };
    daily: {
      time: string[];
      precipitation_probability_max: number[];
      temperature_2m_max: number[];
      temperature_2m_min: number[];
    };
  }

  const [data, setData] = useState<Partial<OpenWeather>>(() => {
    const savedData = localStorage.getItem('OpenWeatherData');
    return savedData ? JSON.parse(savedData) : {};
  });
  const [data2, setData2] = useState<Partial<OpenMeteo>>({});
  const [location, setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},br&APPID=1a26b8eadf51832de229c54d805a278c`;
  const saveDataToLocalStorage = (data: Partial<OpenWeather>) => {
    localStorage.setItem('OpenWeatherData', JSON.stringify(data));
  };

  const searchLocation = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        saveDataToLocalStorage(response.data);
      });
      setLocation('');
    }
  };
  console.log(data);
  console.log(data2);

  useEffect(() => {
    const url2 = data.coord
      ? `https://api.open-meteo.com/v1/forecast?latitude=${data.coord.lat}&longitude=${data.coord.lon}&hourly=temperature_2m,precipitation_probability&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,precipitation_probability_max&current_weather=true&timezone=America%2FSao_Paulo`
      : '';
    axios.get(url2).then((response2) => {
      setData2(response2.data);
      console.log(url2);
    });
  }, [data]);

  const maxTempForecast = data2.daily ? (
    <ul className="mx-2 block space-x-2 lg:flex">
      {data2.daily.temperature_2m_max.slice(1, 7).map((temp, index) => (
        <li key={temp}>
          {data2.daily ? `Max ${data2.daily.time[index + 1]}: ${temp}°C` : null}
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <div
      className="h-[22rem] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="flex justify-end">
        <input
          className="mr-12 mt-4 w-[129.78px] rounded-2xl py-1 text-center font-semibold text-black placeholder-gray-500 opacity-50 ring-2 ring-gray-300 focus:ring-2 focus:ring-gray-500 md:w-[147px]"
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter Location"
        ></input>
      </div>
      <div className="flex justify-between">
        <div className="relative m-6 flex h-[16rem] w-2/5 flex-col items-center justify-center rounded-lg bg-slate-800 bg-opacity-20">
          <h2 className="absolute top-0 left-0 m-2 font-bold text-white">
            {data.name}
          </h2>
          <div className="py-16">
            {data2.current_weather ? (
              <h1 className="text-4xl font-bold text-white lg:text-6xl">
                {data2.current_weather.temperature.toFixed(0)}ºC
              </h1>
            ) : null}
          </div>
          <div className="m-2 flex justify-center space-x-4">
            <div className="mx-auto block lg:flex">
              <img className="my-2 mx-auto h-8 lg:mx-2" src={`${WindIcon}`} />
              <div>
                <h4 className="hidden text-center text-white lg:block">
                  Vento (km/h)
                </h4>
                {data2.current_weather ? (
                  <h4 className="text-center text-white">
                    {data2.current_weather.windspeed.toFixed(1)}{' '}
                  </h4>
                ) : null}
              </div>
            </div>
            <div className="block lg:flex">
              <img
                className="my-2 mx-auto h-8 lg:mx-2"
                src={`${HumidityIcon}`}
              />
              <div>
                <h4 className="hidden text-center text-white lg:block">
                  Umidade
                </h4>
                {data.main ? (
                  <h4 className="text-center text-white">
                    {data.main.humidity}%
                  </h4>
                ) : null}
              </div>
            </div>
            <div className="block lg:flex">
              <img
                className="my-2 mx-auto h-8 text-white lg:mx-2"
                src={`${RainProbIcon}`}
              />
              <div>
                <h4 className="hidden text-center text-white lg:block">
                  Chuva
                </h4>
                {data2.daily ? (
                  <h4 className="text-center text-white">
                    {data2.daily.precipitation_probability_max[0]}%
                  </h4>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="m-6 flex h-[16rem] w-3/5 items-center justify-center bg-red-500">
          <div className="block lg:flex lg:space-x-4">
            <div>{maxTempForecast}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
