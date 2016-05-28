import React from 'react';
import {connect} from 'react-redux';
import get from 'lodash/get';
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
export default function connectSlicedState(path, stateName='state', setStateName = 'setState', replaceStateName = 'replaceState') {
  return function (WrappedComponent) {
    return connect(
      state => state,
      dispatch => ({dispatch}),
      (state, {dispatch}, props) => {
        const slicedState = get(state, path);
        return {
          ...props,
          [stateName]: slicedState,
          [setStateName]: newState => dispatch(setStateByPath(path, newState)),
          [replaceStateName]: newState => dispatch(replaceStateByPath(path, newState)),
        };
      }
    )(WrappedComponent);
  };
}
