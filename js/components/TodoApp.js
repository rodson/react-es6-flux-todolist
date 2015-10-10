import React from 'react';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';
import TodoStore from '../TodoStore';

function getTodoState() {
  return {
    filter: TodoStore.getFilter(),
    todos: TodoStore.getTodos()
  };
}

class TodoApp extends React.Component {

  state = getTodoState();

  componentWillMount() {
    TodoStore.addChangeListener(this._update);
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._update);
  }

  render() {
    return (
      <div className="todoapp">
        <Header todos={this.state.todos}/>
        <MainSection filter={this.state.filter} todos={this.state.todos} />
        <Footer todos={this.state.todos} />
      </div>
    );
  }

  _update = () => {
    this.setState(getTodoState());
  }
}

export default TodoApp;
