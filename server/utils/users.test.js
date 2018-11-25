const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Yehe',
      room: 'Node'
    },{
      id: '2',
      name: 'Peter',
      room: 'React'
    },{
      id: '3',
      name: 'Fin',
      room: 'Node'
    }]
  });


  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find a user', () => {
    var userId = '99';
    var user = users.getUser(userId);
    
    expect(user).toNotExist();
  });

  it('should return names for node', () => {
    var userList = users.getUserList('Node');

    expect(userList).toEqual(['Yehe', 'Fin']);
  })

  it('should return names for react', () => {
    var userList = users.getUserList('React');

    expect(userList).toEqual(['Peter']);
  })
});
