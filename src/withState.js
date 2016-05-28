import React from 'react';
import {connect} from 'react-redux';
import get from 'lodash/get';
import isFunction from 'lodash/isFunction';
import setStateByPath from './setStateByPath';
import replaceStateByPath from './replaceStateByPath';

/**
 * Connect provided component to `path` part of the redux state
 * @param path
 * @param stateName
 * @param setStateName
 * @param replaceStateName
 * @returns {Function}
 */
export default function withState(path, stateName = 'state', setStateName = 'setState', replaceStateName = 'replaceState') {
  return (state, {dispatch}, props) => {
    const realPath = isFunction(path) ? path(props) : path;
    const slicedState = get(state, realPath);
    const result = {
      ...props
    };
    if (stateName) {
      result[stateName] = slicedState;
    }
    if (setStateName) {
      result[setStateName] = newState => dispatch(setStateByPath(realPath, newState));
    }
    if (replaceStateName) {
      result[replaceStateName] = newState => dispatch(replaceStateByPath(realPath, newState));
    }
    return result
  }
}
