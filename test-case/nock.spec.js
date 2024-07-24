/*

nock is a popular library used for HTTP request mocking and testing in Node.js. It allows you to intercept and simulate HTTP requests, making it an invaluable tool for testing code that makes network requests. This helps you avoid making real HTTP requests during testing, which can save time, avoid dependency on external services, and ensure consistent test results.

*/

// test/api.test.js

/*
import nock from 'nock';
import { fetchData } from '../src/api';
import { expect } from 'chai';

// src/api.js
import axios from 'axios';

export const fetchData = async () => {
  const response = await axios.get('https://api.example.com/data');
  return response.data;
};


describe('fetchData', () => {
  beforeEach(() => {
    // Set up `nock` to intercept requests to `https://api.example.com`
    nock('https://api.example.com')
      .get('/data')
      .reply(200, { message: 'success' });
  });

  afterEach(() => {
    // Clean up `nock` after each test
    nock.cleanAll();
  });

  it('should fetch data successfully', async () => {
    const data = await fetchData();
    expect(data).to.deep.equal({ message: 'success' });
  });
});

nock('https://api.example.com')
  .get('/data')
  .reply(500, 'Internal Server Error');


nock('https://api.example.com')
  .get('/data')
  .delay(200) // Delay in milliseconds
  .reply(200, { message: 'success' });

nock('https://api.example.com')
  .post('/data', { key: 'value' })
  .reply(201, { message: 'Created' });

nock('https://api.example.com')
  .get('/data')
  .query({ filter: 'active' })
  .reply(200, { message: 'success' });
// Test code
nock.recorder.play(); // Used to record and play back HTTP requests

*/

