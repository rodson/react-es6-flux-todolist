import React from 'react';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';
import TodoStore from '../TodoStore';

function getTodoState() {
  return {
    todos: TodoStore.getTodos()
  };
}

class TodoApp extends React.Component {

  state = getTodoState();

  componentDidMount() {
    TodoStore.addChangeListener(this._update);
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._update);
  }

  render() {
    return (
      <div className="todoapp">
        <Header />
        <MainSection todos={this.state.todos} />
        <Footer />
      </div>
    );
  }

  _update = () => {
    console.log('update is called');
    this.setState(getTodoState);
  }
}

export default TodoApp;
