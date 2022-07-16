const orders = require('../data/orders.json');

const updateOrder = ({pizzaId, newProperty}) => {
  if (!pizzaId) {
    throw new Error('order does not exist and cannot be updated.');
  }

  const orderToUpdate = orders.find(order => order.pizzaId === pizzaId);

  
  return {
    ...orderToUpdate,
    ...newProperty,
  }
};

module.exports = updateOrder;
