const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const updateOrder = (orderId, request) => {
  if (!orderId) {
    throw new Error('order does not exist and cannot be updated.');
  }

  return docClient.put({
    TableName: 'pizza-orders',
    Item: {
      orderId: 'some-id',
      pizza: request.pizza,
      address: request.address,
      orderStatus: 'pending'
    }
  }).promise()
    .then(res => {
      console.log('Order successfully deleted');
      return res;
    })
    .catch(e => {
      console.error('Something went wrong with deleting your order!', e)
      throw e;
    });
};

module.exports = updateOrder;
