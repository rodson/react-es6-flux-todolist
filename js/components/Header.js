import React from 'react';
import TextInput from './TextInput';
import TodoActions from '../TodoActions';

class Header extends React.Component {

  static propTypes = {
    todos: React.PropTypes.object
  };

  render() {
    var activeCount = 0;
    var todos = this.props.todos;
    for (var id in todos) {
      if (!todos[id].completed) {
        activeCount++;
      }
    }
    return (
      <header className="header">
        <h1>todos</h1>
        <div>
          <input type="checkbox" onChange={this.handleChange} checked={activeCount === 0} />
          <TextInput onSave={this.handleSave} placeholder={"What needs to be done?"} />
        </div>
      </header>
    );
  }

  handleSave(title) {
    TodoActions.create(title);
  }

  handleChange(e) {
    TodoActions.toggleAll(e.target.checked);
  }

}

export default Header;
