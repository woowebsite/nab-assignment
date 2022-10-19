import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store/store';

export const loadingSliceName = 'appLoading';

export const initialState = {
  isLoading: false
};

const loadingSlice = createSlice({
  name: loadingSliceName,
  initialState,
  reducers: {
    showLoading: (state) => ({
      ...state,
      isLoading: true
    }),
    stopLoading: () => initialState
  }
});

const selectIsLoading = (state: AppState) => {
  const dataSelected = state[loadingSliceName];
  return dataSelected?.isLoading;
};

const loadingSelectors = {
  selectIsLoading
};

const { reducer, actions: loadingActions } = loadingSlice;

export { loadingActions, reducer, loadingSelectors };
