import {REPLACE_STATE_BY_PATH} from './constants';

const replaceStateByPath = (path, value) => {
  return {
    type: REPLACE_STATE_BY_PATH,
    path,
    value,
  };
}

export default replaceStateByPath;

