import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, compose} from 'redux';
import {wrapReducerWithSetGlobalState, initialStateReducer} from '../../../src';
import App from './App';

// wrap your reducers
const reducer = wrapReducerWithSetGlobalState(
  // Your normal reducers go here
  combineReducers({
    //   reducer1,
    //   reducer2,

    // you can use `initialStateReducer` if you don't need any complex functionality inside
    site: initialStateReducer({
      pages: {
        userPage: {
          selectedTab: 'tab1',
        },
        someOtherPage: {
          // ...
        }
      },
      entities: {
        users: {
          'id1': {
            name: 'John Snow',
            isDead: true,
          },
          // ...
        }
      },
      settings: {
        background: 'white'
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
          <App />
        </Provider>
      </div>
    );
  }
}

render(<Root />, document.getElementById('root'));
