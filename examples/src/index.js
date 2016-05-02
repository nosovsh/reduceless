import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, compose} from 'redux';
import wrapReducerWithSetGlobalState from '../../src/wrapReducerWithSetGlobalState';
import Form from './Form';

const reducer = wrapReducerWithSetGlobalState(
  // Your normal reducers if you want
  // combineReducers({
  //   reducer1,
  //   reducer2,
  // })
);

// Usual react+redux stuff here

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
          <Form/>
        </Provider>
      </div>
    );
  }
}

render(<Root />, document.getElementById('root'));
