import AppDispatcher from './AppDispatcher';
import TodoConstants from './TodoConstants';

class TodoActions {

  create(title) {
    var action = {
      actionType: TodoConstants.CREATE,
      title: title
    }
    AppDispatcher.dispatch(action);
  }

}

export default new TodoActions();
