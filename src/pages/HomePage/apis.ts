import apiClient from 'apis/apiClient';
import { FORECAST, CITY } from 'apis/apiUrl';

export const getWeathers = (cityId: number) =>
  apiClient
    .get(`city/${cityId}/${FORECAST}`)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });

export const getCities = () =>
  apiClient
    .get(`${CITY}`)
    .then((response) => response)
    .catch((err) => {
      throw err;
    });
