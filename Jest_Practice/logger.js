const userService = require('./userService.js');

async function logUserName(userId) {
  const user = await userService.fetchUser(userId);
  console.log(`User name is: ${user.name}`);
  return user.name;
}

module.exports = { logUserName };
