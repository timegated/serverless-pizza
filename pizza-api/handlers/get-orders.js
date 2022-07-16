const orders = require('../data/orders.json');

const getOrders = (pizzaId) => {
  const pizzaIdNum = parseInt(pizzaId, 10);

  if (!pizzaIdNum) {
    return orders;
  }

  const order = orders.find((order) => {
    return order.pizzaId === pizzaIdNum;
  });

  if (order) return order;

  throw new Error('the order you requested was not found');
};

module.exports = getOrders;
