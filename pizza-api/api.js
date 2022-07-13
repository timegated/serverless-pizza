const API = require('claudia-api-builder');
const api = new API();
const getPizzas = require('./handlers/get-pizzas');

api.get('/', () => {
  return 'Welcome to Pizza';
});

api.get('/pizzas/{id}', (request) => {
  return getPizzas(request.pathParams.id);
}, {
  error: 404,
});

module.exports = api;