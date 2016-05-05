import {SET_STATE_BY_PATH, REPLACE_STATE_BY_PATH} from './constants';
import update from './update';
import get from 'lodash/get';

const setGlobalStateReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_STATE_BY_PATH:
      const oldState = get(state, action.path, {});
      const newValue = {
        ...oldState,
        ...action.value,
      };
      return update(state, action.path, newValue);
    case REPLACE_STATE_BY_PATH:
      return update(state, action.path, action.value)
    default:
      return state;
  }
}

const wrapReducerWithSetGlobalState = (reducer = (s) => s) => {
  return function (state = {}, action) {
    const updatedState = setGlobalStateReducer(state, action);
    return reducer(updatedState, action);
  }
}

export default wrapReducerWithSetGlobalState;
