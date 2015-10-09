import AppDispatcher from './AppDispatcher';
import TodoConstants from './TodoConstants';

class TodoActions {

  create(title) {
    var action = {
      actionType: TodoConstants.CREATE,
      title: title
    };
    AppDispatcher.dispatch(action);
  }

  toggleComplete(id) {
    var action = {
      actionType: TodoConstants.TOGGLE_COMPLETE,
      id: id
    };
    AppDispatcher.dispatch(action);
  }

  update(id, title) {
    var action = {
      actionType: TodoConstants.UPDATE,
      id: id,
      title: title
    };
    AppDispatcher.dispatch(action);
  }

}

export default new TodoActions();
