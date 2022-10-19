import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from 'store/hooks';
import SearchWeather from './components/SearchWeather';
import WeatherList from './components/WeatherList';
import { City } from './model';
import { sagaActions, selectors } from './slice';
import { Wrapper } from './styled';

const HomePage = () => {
  const dispatch = useDispatch();

  const days = useAppSelector(selectors.weathersSelector);
  useEffect(() => {
    dispatch(sagaActions.fetchWeathers(1));
  }, [dispatch]);

  const onSelect = (city: City) => {
    dispatch(sagaActions.fetchWeathers(city.id));
  };
  // RENDER
  return (
    <Wrapper>
      <SearchWeather onSelect={onSelect} />
      <WeatherList days={days} />
    </Wrapper>
  );
};
export default HomePage;
