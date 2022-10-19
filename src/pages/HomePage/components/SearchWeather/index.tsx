import Downshift from 'downshift';
import { City } from 'pages/HomePage/model';
import { sagaActions, selectors } from 'pages/HomePage/slice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store/hooks';
import { AutoCompleteDropdown, AutoCompleteWrapper, SearchWeatherStyled } from './styled';

type SearchWeatherProps = {
  onSelect: (city: City) => void;
};
const SearchWeather = ({ onSelect }: SearchWeatherProps) => {
  const cities = useAppSelector(selectors.citiesSelector) as City[];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sagaActions.fetchCities());
  }, [dispatch]);

  return (
    <SearchWeatherStyled>
      <Downshift
        data-testid='search-input'
        onChange={(selection) => {
          onSelect(selection);
        }}
        itemToString={(item) => (item ? item.name : '')}>
        {({ getInputProps, getItemProps, getLabelProps, getMenuProps, isOpen, inputValue, highlightedIndex, selectedItem }) => (
          <div>
            <AutoCompleteWrapper>
              <input className='form-control mr-sm-2' {...getInputProps()} />
              <img className='search-icon' src='/images/search.webp' width='24' />
              <AutoCompleteDropdown>
                <ul {...getMenuProps()}>
                  {isOpen
                    ? cities
                        .filter((item) => !inputValue || item.name.includes(inputValue))
                        .map((item, index) => (
                          <li
                            {...getItemProps({
                              key: item.name,
                              index,
                              item,
                              style: {
                                backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
                                fontWeight: selectedItem?.name === item.name ? 'bold' : 'normal'
                              }
                            })}>
                            {item.name}
                          </li>
                        ))
                    : null}
                </ul>
              </AutoCompleteDropdown>
            </AutoCompleteWrapper>
          </div>
        )}
      </Downshift>
    </SearchWeatherStyled>
  );
};

export default SearchWeather;
