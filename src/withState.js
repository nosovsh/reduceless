import get from 'lodash/get';
import isFunction from 'lodash/isFunction';
import setStateByPath from './setStateByPath';
import replaceStateByPath from './replaceStateByPath';
import {defaultMemoize} from './utils/defaultMemoize';

// action creators that can be memoized
const setStateCreator = (realPath, dispatch) => newState => dispatch(setStateByPath(realPath, newState));
const replaceStateCreator = (realPath, dispatch) => newState => dispatch(replaceStateByPath(realPath, newState));

/**
 * Connect provided component to `path` part of the redux state
 *
 * Generated props are cached. So your component will not be rerendered if state slice didn't change.
 *
 * @param path
 * @param stateName
 * @param setStateName
 * @param replaceStateName
 * @returns {Function}
 */
export default function withState(path, stateName = 'state', setStateName = 'setState', replaceStateName = 'replaceState') {
  // memoizing action creators.
  const setStateCreatorMemoized = defaultMemoize(setStateCreator);
  const replaceStateCreatorMemoized = defaultMemoize(replaceStateCreator);

  return (state, {dispatch}, props) => {
    const realPath = isFunction(path) ? path(props) : path;
    const slicedState = get(state, realPath);
    const result = {
      ...props,
    };
    if (stateName) {
      result[stateName] = slicedState;
    }
    if (setStateName) {
      result[setStateName] = setStateCreatorMemoized(realPath, dispatch);
    }
    if (replaceStateName) {
      result[replaceStateName] = replaceStateCreatorMemoized(realPath, dispatch);
    }
    return result;
  };
}
