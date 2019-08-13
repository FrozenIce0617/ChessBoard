import { action } from 'typesafe-actions';
import { ActionTypes, IPosition } from './types';

export const getPositionRequest = (payload: IPosition) =>
  action(ActionTypes.GET_POSITION_REQUEST, payload);

export const getPositionSuccess = (payload: IPosition) =>
  action(ActionTypes.GET_POSITION_SUCCESS, payload);

export const getPositionFailure = (err: any) =>
  action(ActionTypes.GET_POSITION_FAILURE, err);
