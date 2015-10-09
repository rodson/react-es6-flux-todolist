import AppDispatcher from './AppDispatcher';
import TodoConstants from './TodoConstants';
import { EventEmitter } from 'events';
import { uuid, store } from './utils';

const CHANGE_EVENT = 'change';
var _todos = store('todos');

function create(title) {
  if (!title) {
    return;
  }
  var todo = {
    id: uuid(),
    title: title,
    completed: false
  }
  _todos[todo.id] = todo;
  store('todos', _todos);
}

function toggleComplete(id) {
  var todo = _todos[id];
  todo.completed = !todo.completed;
  store('todos', _todos);
}

class TodoStore extends EventEmitter {

  getTodos() {
    return _todos;
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  todoStoreToken = AppDispatcher.register(payload => {
    switch (payload.actionType) {
      case TodoConstants.CREATE:
        create(payload.title);
        this.emitChange();
        break;
      case TodoConstants.TOGGLE_COMPLETE:
        toggleComplete(payload.id);
        this.emitChange();
        break;
      default:
        break;
    }
  });

}

export default new TodoStore();
