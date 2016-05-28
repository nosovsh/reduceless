import React from 'react';
import {connectSlicedState} from '../../../src';
import _ from 'lodash'

/**
 * You can use decorators to simplify you code even more.
 * You can override prop names `connectSlicedState(path, stateName, setStateName, replaceStateName)`
 * You can send `null` instead of any prop name if you don't need this prop at all
 */
@connectSlicedState('site.pages.userPage.selectedTab', 'selectedTab', null, 'selectTab')
@connectSlicedState('site.entities.users.id1', 'user', 'updateUser', null)
@connectSlicedState('site.settings.background', 'background', null, 'changeBackground')
class User extends React.Component {
  changeBackground = () => {
    const {background, changeBackground} = this.props;
    const backgrounds = ['white', 'red', 'blue']
    changeBackground(_.sample(_.without(backgrounds, background)));
  }

  render() {
    const {selectedTab, selectTab, user, updateUser, background} = this.props;
    return (
      <div>
        <div>
          Open <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"
             target="_blank">
            Redux DevTools
          </a> to see what's going on under the hood.
        </div>

        <a href="#" onClick={() => selectTab('tab1')}>Bio</a> |&nbsp;
        <a href="#" onClick={() => selectTab('tab2')}>Info</a> |&nbsp;
        <a href="#" onClick={() => selectTab('tab3')}>Settings</a>
        {selectedTab === 'tab1' && (
          <div>
            <h3>Bio</h3>
            User name: {user.name}
          </div>
        )}
        {selectedTab === 'tab2' && (
          <div>
            <h3>Info</h3>
            User status:&nbsp;
            <a href="#" onClick={() => updateUser({isDead: !user.isDead})}>
              {user.isDead ? 'dead' : 'alive'}
            </a>
          </div>
        )}
        {selectedTab === 'tab3' && (
          <div>
            <h3>Site settings</h3>
            Background:&nbsp;
            <a href="#" onClick={this.changeBackground}>
              {background}
            </a>
          </div>
        )}
      </div>
    )
  }
}

export default User;
