import { all } from 'redux-saga/effects';

import apiSagas from './api/saga';

export default function* rootSaga() {
  return yield all([apiSagas()]);
}
