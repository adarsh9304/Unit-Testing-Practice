const sinon = require('sinon');

// A simple object with a method
const user = {
  setName: function (name) {
    this.name = name;
  }
};

// Create a spy on the setName method
const spy = sinon.spy(user, 'setName');

// Call the method
user.setName('Adarsh');
user.setName('India')

// Check if the spy was called
console.log(spy.called); // true
console.log(spy.callCount); // 1
console.log(spy.calledWith('Adarsh')); // true
