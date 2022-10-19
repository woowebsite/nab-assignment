import WeatherType from 'types/WeatherType';

const randomWeather = () => {
  const number = Math.floor(Math.random() * 3 + 1);
  return WeatherType[number];
};

export default randomWeather;
