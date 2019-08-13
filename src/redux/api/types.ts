export enum ActionTypes {
  GET_POSITION_REQUEST = 'GET_POSITION_REQUEST',
  GET_POSITION_SUCCESS = 'GET_POSITION_SUCCESS',
  GET_POSITION_FAILURE = 'GET_POSITION_FAILURE',
}

export interface IPosition {
  pos: string;
}

export interface IPositionState {
  readonly data: string[];
  readonly loading: boolean;
  readonly error: boolean;
}
