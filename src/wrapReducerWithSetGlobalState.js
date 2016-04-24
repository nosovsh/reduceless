import {SET_GLOBAL_STATE} from './constants';
import update from './update';

const setGlobalStateReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_GLOBAL_STATE:
      return update(state, action.path, action.value)
    default:
      return state;
  }
}

const wrapReducerWithSetGlobalState = reducer => {
  return function (state = {}, action) {
    const updatedState = setGlobalStateReducer(state, action);
    return reducer(updatedState, action);
  }
}

export default wrapReducerWithSetGlobalState;