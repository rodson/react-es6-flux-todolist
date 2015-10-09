import React from 'react';
import TextInput from './TextInput';

class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TextInput onSave={this._onSave} placeholder={"What needs to be done?"} />
      </header>
    );
  }

  _onSave(text) {
    console.log('call onsave', text);
  }
}

export default Header;
