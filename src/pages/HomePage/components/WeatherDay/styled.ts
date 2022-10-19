import styled from 'styled-components';

export const WeatherDayStyled = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  width: 100px;
  text-align: center;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;

  &:hover {
    background: #eee;
  }

  .title {
    font-weight: bold;
  }

  .img-weather {
    height: 64px;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .temp {
    display: flex;
    justify-content: space-around;
  }
`;
