import { Reducer } from 'redux';
import { IPositionState, ActionTypes } from './types';

const INITIAL_STATE: IPositionState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<IPositionState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_POSITION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_POSITION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ActionTypes.GET_POSITION_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
