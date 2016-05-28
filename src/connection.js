import React from 'react';
import {connect} from 'react-redux';
import get from 'lodash/get';
import setStateByPath from './setStateByPath';
import replaceStateByPath from './replaceStateByPath';

/**
 * Connect provided component to `path` part of the redux state
 * @param connectors
 * @returns {Function}
 */
export default function connections(connectors = []) {
  return function (WrappedComponent) {
    return connect(
      state => state,
      dispatch => ({dispatch}),
      (state, {dispatch}, props) => {
        return connectors.reduce((newProps, connector) => {
          return {
            ...newProps,
            ...connector(state, {dispatch}, props)
          }
        }, {...props})
      }
    )(WrappedComponent);
  };
}
