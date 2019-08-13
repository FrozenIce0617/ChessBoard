import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { IPositionState } from './api/types';
import rootReducer from './reducers';
import rootSaga from './sagas';

export interface IApplicationState {
  positions: IPositionState;
}

const sagaMiddleware = createSagaMiddleware();

const store: any = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
