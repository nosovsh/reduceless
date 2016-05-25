import React from 'react';
import {connect} from 'react-redux';
import get from 'lodash/get';
import setStateByPath from './setStateByPath';
import replaceStateByPath from './replaceStateByPath';

/**
 * Connect provided component to `path` part of the redux state
 * @param path
 * @returns {getStateType(path)}
 */
export default function connectSlicedState(path, setStateName = 'setState', replaceStateName = 'replaceState') {
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
          ...slicedState,
          [setStateName]: newState => dispatch(setStateByPath(path, newState)),
          [replaceStateName]: newState => dispatch(replaceStateByPath(path, newState)),
        };
      }
    )(Connect);
  };
}
