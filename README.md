# Reduceless
Simple abstraction over Redux to make state management as easy as React's vanilla `setState()` but with advantages of Redux.

The idea is easy: you connect component to a slice of your Redux state to give this component full control over this part of the state. It can read from this state and write to it in React style with `setState` and `replaceState`. You don't need any custom reducers, actions or constants to do it. Just read state and write to it.

Don't worry you are still able to use Redux in the normal way. It's just set of helper to avoid boilerplate for simple actions.

## Installation

```sh
npm install reduceless --save
```

## How to use:
1.wrap your root reducer with `wrapReducerWithSetGlobalState`

```js
import {wrapReducerWithSetGlobalState} from 'reduceless';

const reducer = wrapReducerWithSetGlobalState(
  // Your normal reducers are going here
  // combineReducers({
  //   reducer1,
  //   reducer2,
  // })
);
```

2.connect your component to a slice of your state

```js
import {connectSlicedState} from 'reduceless';

@connectSlicedState('pages.blogs.data.activePost')
const PostForm = ({state, setState, replaceState}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={state.checked}
        onChange={e => setState({'checked': !state.checked})}/>
      <br/>
      value: {state.checked.toString()}
    </div>
  )
}
```

`PostForm` component will recieve part of your Redux state located at `pages.blogs.data.activePost` in `state` prop. Component can change it using `setState(newState)` and `replaceState(newState)` props. This path could even not exist. It will be created automatically when component will write to it.

3.[Optional] Use can use `replaceStateByPath` and `setStateByPath` action creators for advanced scenarios.

```js
import {connectSlicedState} from 'reduceless';
import _ from 'lodash';

const Form = ({checked, setChecked}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => setChecked({'checked': !state.checked})}/>
      <br/>
      value: {checked.toString()}
    </div>
  )
}

export default connect(
  (state, props) => ({
    checked: _.get(state, 'pages.blogs.data.activePost'),
  }),
  dispatch => ({
    setChecked: checked => dispatch(replaceStateByPath('pages.blogs.data.activePost', checked)),
  })
)(Form);
```

Still no actions, reducers or constants.

4.[Optional] use initialReducer
// TODO

## Basic API
###`wrapReducerWithSetGlobalState(reducer)`
Wraps your reducer(probably at root level but you can use it in any level of your reducers tree) with another reducer that  catches events sent by `reduceless`(`SET_STATE_BY_PATH`, `REPLACE_STATE_BY_PATH`).

###`connectSlicedState(path)(component)`
Connects your `component` to a slice of your redux state located at `path`. Sends following props to the `component`:

1. `state` - slice of the state located at `path`. It doesn't matter what exaclty is stored there. It could be object, array, simple value. Actually there could be no such path in your state at all. In that case you will get `state === undefined` so you can use `defaultProps` to populate this prop.

2. `setState(newState)` – action (already wrapped in dispatch) that will _merge_ slice of the state located at `path` with `newState`. If this path does not exist in your redux state it will be created. Calls `setStateByPath` under the hood.

4. `replaceState(newState)` –  action (already wrapped in dispatch) that will _replace_ slice of the state located at `path` with `newState`. If this path is does not exist in your redux state it will be created. Calls `replaceStateByPath` under the hood.

## Advanced API
###`setStateByPath(path, newState)`
Action creator that merges state located by `path` with `newState`.

```js
dispatch(setStateByPath('posts.3.data', {title: 'new title'}))
```

### `replaceStateByPath(path, newState)`
Action creator that merges state located by `path` with `newState`.

```js
dispatch(replaceStateByPath('posts.3.data.title', 'new title'))
```
