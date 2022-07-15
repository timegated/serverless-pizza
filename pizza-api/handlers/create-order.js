
const createOrder = (order) => {
  if (!order || !order.pizzaId || !order.address) {
    throw new Error('To order pizza please provide a pizza type and adress')
  }

  return {};
}

module.exports = createOrder;
