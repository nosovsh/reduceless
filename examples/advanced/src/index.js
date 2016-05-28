import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, compose} from 'redux';
import {wrapReducerWithSetGlobalState, initialStateReducer} from '../../../src';
import Form from './Form';

// wrap your reducers
const reducer = wrapReducerWithSetGlobalState(
  // Your normal reducers go here
  combineReducers({
    //   reducer1,
    //   reducer2,

    // you can use `initialStateReducer` if you don't need any complex functionality inside
    test: initialStateReducer({
      contactsPage: {
        leftBlock: {
          form: {
            checked: false,
            text: '',
          }
        }
      }
    })
  })
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
