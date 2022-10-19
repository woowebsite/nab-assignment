import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadingActions } from 'containers/LoadingContainer/slices';
import { call, put } from 'redux-saga/effects';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { AppState } from 'store/store';
import randomWeather from 'utils/randomUtils';
import { getCities, getWeathers } from './apis';
import { City, ForecastDay } from './model';

// ---------------------------------------
const sliceName = 'home';
type HomeState = {
  days?: ForecastDay[];
  cities?: City[];
};
const initialState: HomeState = {};

// ---------------------------------------
const reducers = {
  fetchWeatherSuccess: (state: HomeState, action: PayloadAction<any>) => ({
    ...state,
    days: action.payload
  }),
  fetchCitiesSuccess: (state: HomeState, action: PayloadAction<any>) => ({
    ...state,
    cities: action.payload
  })
};

const sliceOption = {
  name: sliceName,
  initialState,
  reducers
};
const slice = createSlice(sliceOption);
const { reducer, actions: reducerActions } = slice;

// util functions
// -----------------------------------------------------

const weathersSelector = (state: AppState) => {
  const dataSelected = state[sliceName];
  return dataSelected.days;
};

const citiesSelector = (state: AppState) => {
  const dataSelected = state[sliceName];
  return dataSelected.cities;
};

const selectors = {
  weathersSelector,
  citiesSelector
};

// ---------------------------------------

const sagaOption = {
  name: sliceName,
  sagaType: SagaType.TakeLatest,
  caseSagas: {
    *fetchCities(): any {
      try {
        yield put(loadingActions.showLoading());
        const { data } = yield call(getCities);
        yield put(slice.actions.fetchCitiesSuccess(data));
      } catch (err: any) {
        yield put(loadingActions.stopLoading());
        console.error('Fetch cities error: ', err);
      } finally {
        yield put(loadingActions.stopLoading());
      }
    },
    *fetchWeathers(action: PayloadAction<number>): any {
      try {
        yield put(loadingActions.showLoading());

        const { data } = yield call(getWeathers, action.payload);
        const prepareData = data.map((day: ForecastDay) => ({
          ...day,
          weather: randomWeather()
        }));

        yield put(slice.actions.fetchWeatherSuccess(prepareData));
      } catch (err: any) {
        yield put(loadingActions.stopLoading());
        console.error('Fetch weather error: ', err);
      } finally {
        yield put(loadingActions.stopLoading());
      }
    }
  }
};
const sliceSaga = createSliceSaga(sagaOption);
const { saga, actions: sagaActions } = sliceSaga;
// ---------------------------------------

export { initialState, sliceName, reducer, saga, reducerActions, sagaActions, selectors, sagaOption };
