const AWS = require('aws-sdk');
const {v4: uuidv4} = require('uuid');
const docClient = new AWS.DynamoDB.DocumentClient();

const createOrder = (request) => {
  if (!request || !request.pizza || !request.address) {
    throw new Error('To order pizza please provide a pizza type and adress')
  }

  return docClient.put({
    TableName: 'pizza-orders',
    Item: {
      orderId: uuidv4(),
      pizza: request.pizza,
      address: request.address,
      orderStatus: 'pending'
    }
  }).promise()
    .then(res => {
      console.log('Order successfully created');
      return res;
    })
    .catch(e => {
      console.error('Something went wrong with creating your order', e)
      throw e;
    });
}

module.exports = createOrder;
