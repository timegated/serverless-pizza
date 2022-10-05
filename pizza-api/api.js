const API = require('claudia-api-builder');
const api = new API();
const getPizzas = require('./handlers/get-pizzas');
const createOrder = require('./handlers/create-order');
const getOrders = require('./handlers/get-orders');
const updateOrder = require('./handlers/update-order');
const deleteOrder = require('./handlers/delete-order');
const updateDeliveryStatus = require('./handlers/updateDeliveryStatus');

api.get('/', () => {
  return 'Welcome to Pizza';
});

api.get('/pizzas/{id}', (request) => {
  return getPizzas(request.pathParams.id);
}, {
  error: 404,
});

api.get('/orders/{id}', (request) => {
  return getOrders(request.pathParams.id);
}, {
  success: 200,
  error: 404,
});

api.post('/orders', (request) => {
  return createOrder(request.body);
}, {
  success: 201,
  error: 400,
});

api.put('/orders/{id}', (request) => {
  return updateOrder(request.pathParams.id, request.body);
}, {
  success: 200,
  error: 400,
});

api.delete('/orders/{id}', (request) => {
  return deleteOrder(request.pathParams.id);
}, {
  success: 200,
  error: 400,
});

api.post('/delivery', request => updateDeliveryStatus(request.body), {
    success: 200,
    error: 400,
  }
)
module.exports = api;