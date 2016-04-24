import {SET_GLOBAL_STATE} from './constants';

const setGlobalState = (path, value) => {
  return {
    type: SET_GLOBAL_STATE,
    path,
    value,
  };
}

export default setGlobalState;

