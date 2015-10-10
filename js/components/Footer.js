import React from 'react';
import TodoActions from '../TodoActions';
import { pluralize } from '../utils';
import { Router } from 'director';

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
        <span>{activeCount} { pluralize(activeCount, 'item') } left</span>
        <label>All</label>
        <a href="#/">all</a>
        <a href="#/active">active</a>
        <a href="#/completed">completed</a>
      </footer>
    );
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
