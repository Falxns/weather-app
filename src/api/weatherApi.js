/* eslint-disable implicit-arrow-linebreak */
const KEY = '88f3ecccd19141f3a0680416212510';

export const getWeather = async (query) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${query}`
  );
  const json = await res.json();
  return json;
};

export const getWeatherByCurrentPosition = (callback) =>
  navigator.geolocation.getCurrentPosition(async (position) => {
    const data = await getWeather(
      `${position.coords.latitude},${position.coords.longitude}`
    );
    callback({
      city: data.location.region,
      temp: `${data.current.temp_c} °C`,
      cloudiness: data.current.condition.text,
      wind: `${data.current.wind_dir} ${data.current.wind_kph} km/h`,
      pressure: `${data.current.pressure_mb} mb`,
      humidity: `${data.current.humidity} %`,
    });
  });
