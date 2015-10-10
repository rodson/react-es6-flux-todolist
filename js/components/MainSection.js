import React from 'react';
import TodoItem from './TodoItem';
import TodoActions from '../TodoActions';

class MainSection extends React.Component {

  state = {
    editing: null
  };

  render() {
    var allTodos = this.props.todos;
    var filter = this.props.filter;
    var todoList = [];
    var activeCount = 0;

    var todos = {};
    for (var id in allTodos) {
      if (!allTodos[id].completed) {
        activeCount++;
      }
      if (!filter) {
        todos[id] = allTodos[id];
      } else if (filter === 'active' && !allTodos[id].completed) {
        todos[id] = allTodos[id];
      } else if (filter === 'completed' && allTodos[id].completed) {
        todos[id] = allTodos[id];
      }
    }

    for (var id in todos) {
      let todo = todos[id];
      todoList.push(
        <TodoItem
          key={id}
          todo={todo}
          editing={this.state.editing === id}
          onEdit={this.onEdit.bind(this, todo)}
          onToggle={this.toggleComplete.bind(this, todo)}
          onSave={this.onSave}
          onDelete={this.onDelete.bind(this, todo)}
        />
      );
    }

    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" onChange={this.toggleAll} checked={activeCount === 0} />
        <ul className="todo-list">
          {todoList}
        </ul>
      </section>
    );
  }

  onEdit(todo) {
    this.setState({
      editing: todo.id
    });
  }

  onDelete(todo) {
    TodoActions.delete(todo.id);
  }

  onSave = (id, title) => {
    TodoActions.update(id, title);
    this.setState({
      editing: null
    });
  }

  toggleComplete(todo) {
    TodoActions.toggleComplete(todo.id);
  }

  toggleAll(e) {
    TodoActions.toggleAll(e.target.checked);
  }

}

export default MainSection;
