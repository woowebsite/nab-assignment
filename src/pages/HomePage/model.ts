import WeatherType from 'types/WeatherType';

export type ForecastDay = {
  day: string;
  min: number;
  max: number;
  weather: WeatherType;
  city: string;
};

export type City = {
  id: number;
  name: string;
};
