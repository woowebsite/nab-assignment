import { configureStore, applyMiddleware, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createInjectorsEnhancer } from 'redux-injectors';
import createReducer from './rootReducer';
import rootSaga from './rootSaga';
import { InjectedStore } from 'types/Store';
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
applyMiddleware(...middleware);

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

export function makeStore() {
  let devTools = null;
  // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  const injectorEnhancer = createInjectorsEnhancer({
    createReducer,
    runSaga: sagaMiddleware.run
  });

  const store = configureStore({
    reducer: createReducer(),
    devTools: devTools,
    middleware,
    enhancers: [injectorEnhancer]
  }) as InjectedStore;

  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry
  sagaMiddleware.run(rootSaga);

  return store;
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, any, Action<string>>;

export default store;
