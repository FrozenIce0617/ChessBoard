import axios, { AxiosRequestConfig } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
  getPositionRequest,
  getPositionSuccess,
  getPositionFailure,
} from './actions';
import { ActionTypes } from './types';

axios.defaults.baseURL = 'http://localhost:8000';

function* getPositionRequestHandler(
  payload: ReturnType<typeof getPositionRequest>,
) {
  const params: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
    url: '/api/movement',
    method: 'POST',
    data: {
      pos: payload.payload.pos,
    },
  };

  try {
    const res = yield call(axios.request, params);

    yield put(getPositionSuccess(res.data.data));
  } catch (err) {
    yield put(getPositionFailure(err));
  }
}

export default function* apiSagas() {
  yield takeEvery(ActionTypes.GET_POSITION_REQUEST, getPositionRequestHandler);
}
