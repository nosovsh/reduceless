import React from 'react';
import {connection, withState} from '../../../src';
import _ from 'lodash'

/**
 * You can use `connection` to use `connect` function from `react-redux` to connect multiple things at once
 *
 */
@connection([
  withState('site.pages.userPage.selectedTab', 'selectedTab', null, 'selectTab'),
  withState('site.entities.users.id1', 'user', 'updateUser', null),
  withState('site.settings.background', 'background', null, 'changeBackground'),
])
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
