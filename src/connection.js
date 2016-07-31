import {connect} from 'react-redux';

/**
 * Connect provided component to `path` part of the redux state
 * @param connectors
 * @returns {Function}
 */
export default function connections(connectors = []) {
  return WrappedComponent => {
    return connect(
      state => state,
      dispatch => ({dispatch}),
      (state, {dispatch}, props) => {
        return connectors.reduce((newProps, connector) => {
          return {
            ...newProps,
            ...connector(state, {dispatch}, props),
          };
        }, {...props});
      }
    )(WrappedComponent);
  };
}
