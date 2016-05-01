import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, compose} from 'redux';

import wrapReducerWithSetGlobalState from '../../src/wrapReducerWithSetGlobalState';

const reducer = wrapReducerWithSetGlobalState(
  combineReducers({
    test: (state={}) => state,
  })
);

const configureStore = () => {
  return compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)(reducer);
}


const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>test</div>
        </Provider>
      </div>
    );
  }
}

render(<Root />, document.getElementById('root'));
