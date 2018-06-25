const got = require('got');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const setMiddleware = require('./middleware');
const { multiFetchLocalRequest } = require('../src');

beforeAll(() => {
  const app = setMiddleware(express, http, bodyParser);
  routes(multiFetchLocalRequest, app);
});
test('Should check response', async (done) => {
  const {body} = (await got('http://localhost:8000/api/resources?users=users&todos=todos', { json: true }));
  // console.log('test response.body', body);
  expect(typeof '').toEqual('string');
  expect(Object.keys(body).length).toEqual(2);
  expect(Object.keys(body)[0]).toEqual('users');
  expect(Object.keys(body)[1]).toEqual('todos');

  done();
});
