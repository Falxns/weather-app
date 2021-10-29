/* eslint-disable implicit-arrow-linebreak */
import uniqid from 'uniqid';

const KEY = '88f3ecccd19141f3a0680416212510';

export const getWeather = async (query) => {
  const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${query}`);
  const json = await res.json();
  return {
    id: uniqid(),
    city: json.location.name,
    tempC: `${json.current.temp_c} °C`,
    tempF: `${json.current.temp_f} ℉`,
    cloudiness: json.current.condition.text,
    wind: `${json.current.wind_dir} ${json.current.wind_kph} km/h`,
    pressure: `${json.current.pressure_mb} mb`,
    humidity: `${json.current.humidity} %`,
  };
};

export const getWeatherByCurrentPosition = (callback) =>
  navigator.geolocation.getCurrentPosition(async (position) => {
    const data = await getWeather(`${position.coords.latitude},${position.coords.longitude}`);
    callback(data);
  });
