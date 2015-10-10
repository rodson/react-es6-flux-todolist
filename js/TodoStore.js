import AppDispatcher from './AppDispatcher';
import TodoConstants from './TodoConstants';
import { EventEmitter } from 'events';
import { uuid, store } from './utils';

const CHANGE_EVENT = 'change';
const TODOS = 'todos';
var _todos = store(TODOS);
var _filter = '';

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
  store(TODOS, _todos);
}

function toggleComplete(id) {
  var todo = _todos[id];
  todo.completed = !todo.completed;
  store(TODOS, _todos);
}

function update(id, title) {
  var todo = _todos[id];
  todo.title = title;
  store(TODOS, _todos);
}

function deleteItem(id) {
  delete _todos[id];
  store(TODOS, _todos);
}

function toggleAll(completed) {
  for (var id in _todos) {
    _todos[id].completed = completed;
  }
  store(TODOS, _todos);
}

function updateFilter(filter) {
  _filter = filter;
}

class TodoStore extends EventEmitter {

  getTodos() {
    return _todos;
  }

  getFilter() {
    return _filter;
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
      case TodoConstants.UPDATE:
        update(payload.id, payload.title);
        this.emitChange();
        break;
      case TodoConstants.DELETE:
        deleteItem(payload.id);
        this.emitChange();
      case TodoConstants.TOGGLE_ALL:
        toggleAll(payload.completed)
        this.emitChange();
        break;
      case TodoConstants.UPDATE_FILTER:
        updateFilter(payload.filter);
        this.emitChange();
        break;
      default:
        break;
    }
  });

}

export default new TodoStore();
