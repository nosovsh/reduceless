import React from 'react';
import {connectSlicedState} from '../../src';

const Form = ({state, setState}) => {
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

Form.defaultProps = {
  state: {
    checked: false
  }
}

// Here magic is happening.
// We are connecting our component to part of the state at 'test.contactsPage.leftBlock.form'
export default connectSlicedState('test.contactsPage.leftBlock.form')(Form);
