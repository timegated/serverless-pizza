const AWS = require('aws-sdk');
const {v4: uuidv4} = require('uuid');
const docClient = new AWS.DynamoDB.DocumentClient();
const rp = require('minimal-request-promise');

const createOrder = (request) => {
  if (!request || !request.pizza || !request.address) {
    throw new Error('To order pizza please provide a pizza type and adress')
  }
  
  return rp.post('https://some-like-it-hot.effortless-serverless.com/delivery',
  {
    headers: {
      "Authorization": "aunt-marias-pizzeria-1234567890",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      pickupTime: '15.34pm',
      pickupAddress: 'Aunt Maria Pizzeria',
      deliveryAddress: request.address,
      webhookUrl: 'https://whpcvzntil.execute-api.eu-central-1.amazonaws.com/chapter4_1/delivery',
    })
  }).then((rawResponse) => {
    JSON.parse(rawResponse.body).then((response) => {
      return docClient.put({
        TableName: 'pizza-orders',
        Item: {
          orderId: uuidv4(),
          pizza: request.pizza,
          address: request.address,
          timestamp: new Date().toISOString().replace(/T|Z/g, " "),
          orderStatus: 'pending'
        }
      }).promise()
    })
  }).then((res) => {
    console.log('Order is saved', res);
    return res;
  }).catch(err => {
    console.log('Order was not saved');
    throw err;
  })
} 

module.exports = createOrder;
