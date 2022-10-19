import styled from 'styled-components';

export const SearchWeatherStyled = styled.div`
  margin-bottom: 10px;
`;

export const AutoCompleteWrapper = styled.div`
  position: relative;

  .search-icon {
    position: absolute;
    right: 10px;
    top: 7px;
    opacity: 0.5;
  }
`;

export const AutoCompleteDropdown = styled.div`
  max-height: 200px;
  overflow: auto;
  position: absolute;
  width: 100%;
`;
