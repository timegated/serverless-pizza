const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

const deleteOrder = (orderId) => {
  if (!orderId) {
    throw new Error('requested order cannot be deleted');
  }

return docClient.delete({
    TableName: 'pizza-orders',
    Key: {
      orderId: orderId,
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

module.exports = deleteOrder;
