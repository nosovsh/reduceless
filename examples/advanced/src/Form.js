import React from 'react';
import {connectSlicedState} from '../../../src';


/**
 * You can use decorators to simplify you code even more.
 * You can override prop names `connectSlicedState(path, stateName, setStateName, replaceStateName)`
 * You can send `null` instead of any prop name if you don't need this prop at all
 */
@connectSlicedState('test.contactsPage.leftBlock.form', 'form', 'setFormFields', null)
class Form extends React.Component {
  render() {
    const {form, setFormFields} = this.props;
    return (
      <div>
        <div>
          Open
          <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"
             target="_blank">
            Redux DevTools
          </a>
          To see what's going on under the hood.
        </div>
        <input
          type="checkbox"
          checked={form.checked}
          onChange={e => setFormFields({'checked': !form.checked})}/>
        <input
          type="text"
          onChange={e => setFormFields({'text': e.target.value})}/>
        <div>
          Checkbox: {form.checked.toString()}
        </div>
        <div>
          Text: {form.text}
        </div>
      </div>
    )
  }
}

export default Form;
