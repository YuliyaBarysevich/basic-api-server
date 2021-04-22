'use strict'

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('API SERVER:', () => {

   // =================================BAD ROUTE / BAD METHOD=================================


  it ('should respond with a 404 on not found', async() => {
    return mockRequest.get('/no-thing').then(data => {
      expect(data.status).toBe(404)
    })
  })

  it ('should respond with 404 on BAD REQUEST', async() => {
    const response = await mockRequest.delete('/recipes');
    expect(response.status).toBe(404)
  })


  // =================================RECIPES ROUTS TESTS=================================

  it('should create a new item in the database', async () => {
    const response = await  mockRequest.post('/recipes').send({testKey: 'test-value'})
    expect(response.status).toBe(201);
    expect(response.body.record.testKey).toEqual('test-value')
  })

  it('should retrieve an item from the database', async () => {
    const response = await mockRequest.get('/recipes/1');
    expect(response.status).toBe(200);
    expect(typeof response.body).toBe('object');
  })

  it('should retrieve all items from the database', async () => {
    const response = await mockRequest.get('/recipes');
    expect(response.status).toBe(200)
    expect(response.body.length).toEqual(1)
  })

  it('should update an item from database with new item', async () => {
    const response = await mockRequest.put('/recipes/1').send({testKey2: 'test-value2'})
    expect(response.status).toBe(200);
    expect(response.body.record.testKey2).toEqual('test-value2')
  })

  it('should delete an item from database', async () => {
    const response = await mockRequest.delete('/recipes/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeFalsy()
    expect(response.body).toBe(null)
  })


// =================================WORKOUT ROUTS TESTS=================================

  it('should create a new item in the database', async () => {
    const response = await  mockRequest.post('/workouts').send({testKey: 'test-value'})
    expect(response.status).toBe(201);
    expect(response.body.record.testKey).toEqual('test-value')
  })

  it('should retrieve an item from the database', async () => {
    const response = await mockRequest.get('/workouts/1');
    expect(response.status).toBe(200);
    expect(typeof response.body).toBe('object');
  })

  it('should retrieve all items from the database', async () => {
    const response = await mockRequest.get('/workouts');
    expect(response.status).toBe(200)
    expect(response.body.length).toEqual(1)
  })

  it('should update an item from database with new item', async () => {
    const response = await mockRequest.put('/workouts/1').send({testKey2: 'test-value2'})
    expect(response.status).toBe(200);
    expect(response.body.record.testKey2).toEqual('test-value2')
  })

  it('should delete an item from database', async () => {
    const response = await mockRequest.delete('/workouts/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeFalsy()
    expect(response.body).toBe(null)
  })

})