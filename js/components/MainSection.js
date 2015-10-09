import React from 'react';
import TodoItem from './TodoItem';

class MainSection extends React.Component {

  state = {
    editing: null
  };

  render() {
    var todos = this.props.todos;
    var todoList = [];

    for (var id in todos) {
      todoList.push(
        <TodoItem
          key={id}
          todo={todos[id]}
          editing={this.state.editing === id}
          onEdit={this.onEdit} />
      );
    }

    return (
      <section className="mainsection">
        <ul>
          {todoList}
        </ul>
      </section>
    );
  }

  onEdit = (id) => {
    this.setState({
      editing: id
    });
  }

  onSave = (title) => {

  }

}

export default MainSection;
