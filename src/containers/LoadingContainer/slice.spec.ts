import { reducer, loadingActions, initialState, loadingSelectors, loadingSliceName } from './slices';
import apiClient from 'apis/apiClient';
import sinon from 'sinon';

const stub = sinon.stub(apiClient, 'get');

describe('reducerActions', () => {
  it('loadingActions', () => {
    expect(reducer(initialState, loadingActions.showLoading())).toEqual({
      isLoading: true
    });
  });
});
describe('selectors', () => {
  const state = {
    [loadingSliceName]: {
      isLoading: true
    }
  };
  it('selectDistricts', () => {
    expect(loadingSelectors.selectIsLoading(state)).toEqual(true);
  });
});
