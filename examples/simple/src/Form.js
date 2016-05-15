import React from 'react';
import {connectSlicedState} from '../../../src';

const Form = ({state, setState}) => {
  return (
    <div>
      <div>
        Open
        <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en">
          Redux DevTools
        </a>
        To see what's going on under the hood.
      </div>
      <input
        type="checkbox"
        checked={state.checked}
        onChange={e => setState({'checked': !state.checked})}/>
      <div>
        Value: {state.checked.toString()}
      </div>
    </div>
  )
}

Form.defaultProps = {
  state: {
    checked: false
  }
}

// Here magic is happening.
// We are connecting our component to part of the state at 'test.contactsPage.leftBlock.form'
export default connectSlicedState('test.contactsPage.leftBlock.form')(Form);
