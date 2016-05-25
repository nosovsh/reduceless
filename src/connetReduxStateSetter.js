import React from 'react';
import {connect} from 'react-redux';
import setStateByPath from './setStateByPath';
import replaceStateByPath from './replaceStateByPath';

/**
 * Connect provided component to `path` part of the redux state
 * @param path
 * @returns {getStateType(path)}
 */
export default function connetReduxStateSetter(path, setStateName = 'setReduxState', replaceStateName = 'replaceState') {
  return function (WrappedComponent) {
    class Connect extends React.Component {
      render() {
        return (
          <WrappedComponent {...this.props} />
        );
      }
    }
    return connect(
      null,
      dispatch => ({dispatch}),
      (state, {dispatch}, props) => {
        return {
          ...props,
          [setStateName]: newState => dispatch(setStateByPath(path, newState)),
          [replaceStateName]: newState => dispatch(replaceStateByPath(path, newState)),
        };
      }
    )(Connect);
  };
}
