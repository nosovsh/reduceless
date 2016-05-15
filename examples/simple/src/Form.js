import React from 'react';
import {connectSlicedState} from '../../../src';

const Form = ({state, setState, replaceState}) => {
  return (
    <div>
      <div>
        Open
        <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en" target="_blank">
          Redux DevTools
        </a>
        To see what's going on under the hood.
      </div>
      <input
        type="checkbox"
        checked={state.checked}
        onChange={e => setState({'checked': !state.checked})}/>
      <input
        type="text"
        onChange={e => setState({'text': e.target.value})}/>
      <div>
        Checkbox: {state.checked.toString()}
      </div>
      <div>
        Text: {state.text}
      </div>
    </div>
  )
}

// Here magic is happening.
// We are connecting our component to part of the state at 'test.contactsPage.leftBlock.form'
export default connectSlicedState('test.contactsPage.leftBlock.form')(Form);
