import {SET_STATE_BY_PATH} from './constants';

const setStateByPath = (path, value) => {
  return {
    type: SET_STATE_BY_PATH,
    path,
    value,
  };
}

export default setStateByPath;

