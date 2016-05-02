import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import get from 'lodash/get';
import setGlobalState from './setGlobalState';

/**
 * Connect provided component to `path` part of the redux state
 * @param path
 * @returns {Function}
 */
export default function connectSlicedState(path) {
  return function (WrappedComponent) {
    class Connect extends React.Component {
      render() {
        return (
          <WrappedComponent {...this.props}/>
        );
      }
    }
    return connect(
      state => state,
      dispatch => ({dispatch}),
      (state, {dispatch}, props) => {
        const slicedState = get(state, path);
        return {
          ...props,
          state: slicedState,
          setState: newState => dispatch(setGlobalState(path, {
            ...slicedState,
            ...newState
          })),
        };
      }
    )(Connect);
  };
}
