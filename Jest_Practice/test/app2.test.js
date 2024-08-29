const request = require('supertest');
const app = require('../app2.js');

describe('Users API', () => {
  it('GET /users should return all users', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(2);
  });

  it('GET /users/:id should return a user by ID', async () => {
    const response = await request(app).get('/users/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ id: 1, name: 'Name1', email: 'name1@example.com' });
  });

  it('GET /users/:id should return 404 if user not found', async () => {
    const response = await request(app).get('/users/999');
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({ error: 'User not found' });
  });

  it('POST /users should create a new user', async () => {
    const newUser = { name: 'Name3', email: 'name3@example.com' };
    const response = await request(app).post('/users').send(newUser);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({ id: 3, ...newUser });

    const allUsersResponse = await request(app).get('/users');
    expect(allUsersResponse.body.length).toBe(3);
  });

  it('PUT /users/:id should update an existing user', async () => {
    const updatedUser = { name: 'name1 Updated', email: 'name1updated@example.com' };
    const response = await request(app).put('/users/1').send(updatedUser);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ id: 1, ...updatedUser });
  });

  it('PUT /users/:id should return 404 if user not found', async () => {
    const response = await request(app).put('/users/999').send({ name: 'Not Found' });
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({ error: 'User not found' });
  });

  it('DELETE /users/:id should delete a user', async () => {
    const response = await request(app).delete('/users/1');
    expect(response.statusCode).toBe(204);

    const allUsersResponse = await request(app).get('/users');
    expect(allUsersResponse.body.length).toBe(2);
  });

  it('DELETE /users/:id should return 204 even if user not found', async () => {
    const response = await request(app).delete('/users/999');
    expect(response.statusCode).toBe(204);
  });
});
