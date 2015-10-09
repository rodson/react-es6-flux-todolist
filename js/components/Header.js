import React from 'react';
import TextInput from './TextInput';
import TodoActions from '../TodoActions';

class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TextInput onSave={this._onSave} placeholder={"What needs to be done?"} />
      </header>
    );
  }

  _onSave(title) {
    TodoActions.create(title);
  }
}

export default Header;
