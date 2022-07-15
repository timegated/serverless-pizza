const API = require('claudia-api-builder');
const api = new API();
const getPizzas = require('./handlers/get-pizzas');
const createOrder = require('./handlers/create-order');

api.get('/', () => {
  return 'Welcome to Pizza';
});

api.get('/pizzas/{id}', (request) => {
  return getPizzas(request.pathParams.id);
}, {
  error: 404,
});

api.post('/orders', (request) => {
  return createOrder(request.body);
}, {
  success: 201,
  error: 400,
});

module.exports = api;