import React from 'react';
import {connect} from 'react-redux';
import get from 'lodash/get';
import setStateByPath from './setStateByPath';
import replaceStateByPath from './replaceStateByPath';
import connection from './connection';
import withState from './withState';

/**
 * Connect provided component to `path` part of the redux state
 * @param path
 * @param stateName
 * @param setStateName
 * @param replaceStateName
 * @returns {Function}
 */
export default function connectSlicedState(path, stateName='state', setStateName = 'setState', replaceStateName = 'replaceState') {
  return connection([
    withState(path, stateName, setStateName, replaceStateName)
  ]);
}
