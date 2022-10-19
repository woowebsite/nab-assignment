import { Reducer, Store } from 'redux';
import { Saga } from 'redux-saga';
import { SagaInjectionModes } from 'redux-injectors';
import KeyValue from './KeyValue';

export interface InjectedStore extends Store {
  injectedReducers: KeyValue;
  injectedSagas: KeyValue;
  runSaga(saga: Saga<any[]> | undefined, args: any | undefined): any;
}

export interface InjectReducerParams {
  key: string;
  reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
  key: string;
  saga: Saga;
  mode?: SagaInjectionModes;
}
