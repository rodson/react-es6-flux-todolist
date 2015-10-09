import React from 'react';
import TodoActions from '../TodoActions';
import classNames from 'classnames';

class TodoItem extends React.Component {

  static propTypes = {
    todo: React.PropTypes.object,
    editing: React.PropTypes.bool,
    onEdit: React.PropTypes.func
  };

  state = {
    title: this.props.todo.title
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.editing && this.props.editing) {
      var node = this.refs.edittext;
      node.focus();
      node.setSelectionRange(node.value.length, node.value.length);
    }
  }

  render() {
    return (
      <li className={classNames('todoitem', {editing: this.props.editing})}>
        <div>
          <input type="checkbox" />
          <label onDoubleClick={this.handleEdit}>{this.state.title}</label>
        </div>
        <input
          ref="edittext"
          type="text"
          onBlur={this.handleSave}
          onChange={this.handleChange}
          value={this.state.title} />
      </li>
    );
  }

  handleEdit = () => {
    this.props.onEdit(this.props.todo.id);
  }

  handleSave = () => {
    this.props.onEdit(null);
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

}

export default TodoItem;
