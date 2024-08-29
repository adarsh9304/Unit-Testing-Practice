const request=require('supertest');
const app1=require('../app1.js');
const { describe } = require('@jest/globals');

describe('async test module',()=>{
    test('data from app1',async ()=>{
        const response=await request(app1).get('/data');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({message:'Hello Jest'})
    })
})