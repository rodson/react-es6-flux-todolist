import React from 'react';
import TodoActions from '../TodoActions';
import { pluralize } from '../utils';
import { Router } from 'director';
import classNames from 'classnames';

class Footer extends React.Component {

  static propTypes = {
    todos: React.PropTypes.object
  };

  componentDidMount() {
    var routes = {
      '/': this.all,
      '/active': this.active,
      '/completed': this.completed
    };
    var router = Router(routes);
    router.init();
  }

  render() {
    var activeCount = 0;
    var todos = this.props.todos;
    for (var id in todos) {
      if (!todos[id].completed) {
        activeCount++;
      }
    }
    return (
      <footer className="footer">
        <span className="todo-count"><strong>{activeCount}</strong> { pluralize(activeCount, 'item') } left</span>
        <ul className="filters">
          <li><a className={classNames({selected: this.props.filter === ''})} href="#/">All</a></li>
          <li><a className={classNames({selected: this.props.filter === 'active'})} href="#/active">Active</a></li>
          <li><a className={classNames({selected: this.props.filter === 'completed'})} href="#/completed">Completed</a></li>
        </ul>
        <button className="clear-completed" onClick={this.onClearCompleted}>
          Clear completed
        </button>

      </footer>
    );
  }

  onClearCompleted() {
  }

  all() {
    TodoActions.updateFilter('');
  }

  active() {
    TodoActions.updateFilter('active');
  }

  completed() {
    TodoActions.updateFilter('completed')
  }

}

export default Footer;
