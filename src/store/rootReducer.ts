import { combineReducers } from '@reduxjs/toolkit';
import { Reducer } from 'redux';
import { reducer as loadingReducer } from 'containers/LoadingContainer/slices';
import { reducer as homeReducer } from 'pages/HomePage/slice';

function createReducer(injectedReducers: { [key: string]: Reducer } = {}) {
  const rootReducer = combineReducers({
    home: homeReducer,
    loading: loadingReducer,
    ...injectedReducers
  });
  return rootReducer;
}

export default createReducer;
