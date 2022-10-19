import { ForecastDay } from 'pages/HomePage/model';
import WeatherDay from '../WeatherDay';
import { WeatherListStyled } from './styled';

type WeatherListProps = {
  days: ForecastDay[];
};
const WeatherList = ({ days }: WeatherListProps) => {
  return (
    <WeatherListStyled>
      {days?.map((x, idx) => (
        <WeatherDay key={idx} data={x} />
      ))}
    </WeatherListStyled>
  );
};

export default WeatherList;
