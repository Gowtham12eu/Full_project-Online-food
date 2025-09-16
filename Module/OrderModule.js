const mongoose = require('mongoose');

module.exports = (connection) => {
  const orderSchema = new mongoose.Schema({
    order_name: String,
    order_ID: String,
    date_time: String,
    payment_status: String,
    payment_method: String,
    order_status: String
  });

  return connection.model('Order', orderSchema);
};
