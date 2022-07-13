'use strict'
const pizzas = require('../data/pizza.json');

const getPizzas = (pizzaId) => {
  const pizzaIdNum = parseInt(pizzaId, 10);

  if (!pizzaIdNum) {
    return pizzas;
  }
  const pizza = pizzas.find((pizza) => {
    return pizza.id === pizzaIdNum;
  });

  if (pizza) return pizza;

  throw new Error('the pizza you requested was not found');
}

module.exports = getPizzas;
