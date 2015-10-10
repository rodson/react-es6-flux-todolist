import React from 'react';
import TextInput from './TextInput';
import TodoActions from '../TodoActions';

class Header extends React.Component {

  static propTypes = {
    todos: React.PropTypes.object
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TextInput className="new-todo" onSave={this.handleSave} placeholder={"What needs to be done?"} />
      </header>
    );
  }

  handleSave(title) {
    TodoActions.create(title);
  }

}

export default Header;
