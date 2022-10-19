import { ForecastDay } from 'pages/HomePage/model';
import { WeatherDayStyled } from './styled';

type WeatherDayProps = {
  data: ForecastDay;
};
const WeatherDay = ({ data }: WeatherDayProps) => {
  return (
    <WeatherDayStyled>
      <div className='title'>{data.day}</div>
      <div className='img-weather'>
        <img src={`/images/${data.weather}.png`} alt={data.weather.toString()} />
      </div>
      <div className='temp'>
        <div>{data.min}°</div>
        <div>{data.max}°</div>
      </div>
    </WeatherDayStyled>
  );
};

export default WeatherDay;
