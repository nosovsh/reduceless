# Reduceless

## Installation

```sh
npm install reduceless --save
```

## How to use:
1.wrap your root reducer with `wrapReducerWithSetGlobalState`

```js
import wrapReducerWithSetGlobalState from 'reduceless';

const reducer = wrapReducerWithSetGlobalState(
  // Your normal reducers are going here
  // combineReducers({
  //   reducer1,
  //   reducer2,
  // })
);
```

2.

```js
// reducer
export default function app(state = {
  settings: {
    test: false,
  },
}, action) {


// component
import { connect } from 'react-redux';
import { connetReduxStateSetter } from 'reduceless';

@connect(...)
@connetReduxStateSetter('app.settings', 'setAppSettings')
export default class Component extends Component {


// render
<button onClick={() => setAppSettings({ test: true })}>Click</button>
```

Or:

```js
import { connectSlicedState } from 'reduceless';

@connectSlicedState('pages.blogs.data.activePost')
const PostForm = ({checked, setReduxState, replaceState}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={state.checked}
        onChange={e => setReduxState({'checked': !state.checked})}/>
      <br/>
      value: {checked.toString()}
    </div>
  )
}
```