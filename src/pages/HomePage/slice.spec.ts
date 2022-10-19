import apiClient from 'apis/apiClient';
import sinon from 'sinon';
import store from 'store/store';
import { reducerActions, sagaOption } from './slice';

const stub = sinon.stub(apiClient, 'get');

describe('sagaActions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('fetchCities successfully', async () => {
    stub.callsFake(() =>
      Promise.resolve({
        data: [
          {
            id: 1
          }
        ]
      } as any)
    );
    const spyAction = jest.spyOn(reducerActions, 'fetchCitiesSuccess');

    await store.runSaga(sagaOption.caseSagas.fetchCities, { payload: { pageNumber: 1, pageSize: 20 } }).toPromise();
    expect(spyAction).toBeCalledTimes(1);
  });
  it('fetchCities failed', async () => {
    stub.rejects();
    const spyAction = jest.spyOn(reducerActions, 'fetchCitiesSuccess');

    await store.runSaga(sagaOption.caseSagas.fetchCities, { payload: { pageNumber: 1, pageSize: 20 } }).toPromise();
    expect(spyAction).not.toBeCalled();
  });
  it('fetchWeathers successfully', async () => {
    stub.callsFake(() =>
      Promise.resolve({
        data: [
          {
            id: 1
          }
        ]
      } as any)
    );
    const spyAction = jest.spyOn(reducerActions, 'fetchWeatherSuccess');

    await store.runSaga(sagaOption.caseSagas.fetchWeathers, { payload: { pageNumber: 1, pageSize: 20 } }).toPromise();
    expect(spyAction).toBeCalledTimes(1);
  });
  it('fetchWeathers failed', async () => {
    stub.rejects();
    const spyAction = jest.spyOn(reducerActions, 'fetchWeatherSuccess');

    await store.runSaga(sagaOption.caseSagas.fetchWeathers, { payload: { pageNumber: 1, pageSize: 20 } }).toPromise();
    expect(spyAction).not.toBeCalled();
  });
});
