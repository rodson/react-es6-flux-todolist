jest.dontMock('../TodoStore');
jest.mock('../AppDispatcher');

describe('TodoStore', () => {
  var TodoConstants = require('../TodoConstants');
  var AppDispatcher;
  var TodoStore;
  var callback;

  var actionCreate = {
    actionType: TodoConstants.CREATE,
    title: 'mytitle'
  };
  var actionDelete = {
    actionType: TodoConstants.DELETE,
    id: 'myid'
  };

  beforeEach(() => {
    AppDispatcher = require('../AppDispatcher');
    TodoStore = require('../TodoStore');
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('register a callback with the dispatcher', () => {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });

})
