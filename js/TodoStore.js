import AppDispatcher from './AppDispatcher';
import TodoConstants from './TodoConstants';
import { EventEmitter } from 'events';
import { uuid } from './utils';

const CHANGE_EVENT = 'change';
var _todos = {};

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
      default:
        break;
    }
  });

}

export default new TodoStore();
