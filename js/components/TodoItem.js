import React from 'react';
import TodoActions from '../TodoActions';
import classNames from 'classnames';

const KEY_ENTER = 13;

class TodoItem extends React.Component {

  static propTypes = {
    todo: React.PropTypes.object,
    editing: React.PropTypes.bool,
    onEdit: React.PropTypes.func,
    onToggle: React.PropTypes.func,
    onSave: React.PropTypes.func
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
      <li className={classNames('todoitem', {editing: this.props.editing, completed: this.props.todo.completed})}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={this.props.onToggle}/>
          <label onDoubleClick={this.handleEdit}>{this.state.title}</label>
          <button className="destroy" onClick={this.props.onDelete} />
        </div>
        <input
          ref="edittext"
          className="edit"
          type="text"
          onBlur={this.handleSave}
          onChange={this.handleChange}
          value={this.state.title}
          onKeyDown={this.handleKeyDown}/>
      </li>
    );
  }

  handleEdit = () => {
    this.props.onEdit(this.props.todo.id);
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleSave = (e) => {
    this.props.onSave(this.props.todo.id, e.target.value);
  }

  handleKeyDown = (e) => {
    if (e.keyCode === KEY_ENTER) {
      this.handleSave(e);
    }
  }

}

export default TodoItem;
