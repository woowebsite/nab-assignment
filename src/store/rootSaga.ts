import { all } from 'redux-saga/effects';
import { saga as homeSaga } from 'pages/HomePage/slice';

export default function* rootSaga() {
  yield all([homeSaga()]);
}
