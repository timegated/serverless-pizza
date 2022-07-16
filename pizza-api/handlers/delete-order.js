const orders = require('../data/orders.json');

const deleteOrder = (pizzaId) => {
  if (!pizzaId) {
    throw new Error('requested order cannot be deleted');
  }

  orders.filter(order => order.pizzaId !== pizzaId);

  return orders;
};

module.exports = deleteOrder;
