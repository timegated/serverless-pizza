const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

const orders = require('../data/orders.json');

const getOrders = (orderId) => {
  if (orderId === "all") {
    return docClient.query({
      TableName: 'pizza-orders',
      KeyConditionExpression: "orderStatus = :orderStatus",
      ExpressionAttributeValues: {
        ':orderStatus': 'pending'
      }
    }).promise()
    .then(res => {
      console.log('Orders retrieved');
      return res;
    })
    .catch(e => {
      console.error('Something went wrong with deleting your order!', e)
      throw e;
    });;
  }

  if (orderId) return docClient.query({
    TableName: 'pizza-orders',
    KeyConditionExpression: `orderId = :orderId`,
    ExpressionAttributeValues: {
      ':orderId': orderId
    }
  }).promise()
  .then(res => {
    console.log('Order successfully retrieved');
    return res;
  })
  .catch(e => {
    console.error('Something went wrong with deleting your order!', e)
    throw e;
  });;

  throw new Error('the order you requested was not found');
};

module.exports = getOrders;
