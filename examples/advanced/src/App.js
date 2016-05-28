import React from 'react';
import {connectSlicedState} from '../../../src';
import User from './User';

/**
 * You can use decorators to simplify you code even more.
 * You can override prop names with `connectSlicedState(path, stateName, setStateName, replaceStateName)`
 * You can send `null` instead of any prop name if you don't need this prop at all
 */
@connectSlicedState('site.settings.background', 'background', null, null)
class App extends React.Component {
  render() {
    const {background} = this.props;
    return (
      <div
        style={{
          backgroundColor: background,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          padding: 20,
        }}
      >
        <User />
      </div>
    )
  }
}

export default App;
