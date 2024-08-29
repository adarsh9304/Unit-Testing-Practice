// const fetch = require('node-fetch');

async function fetchUser(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  console.log('response',response)
  const data = await response.json();
  return data;
}

module.exports = { fetchUser };
