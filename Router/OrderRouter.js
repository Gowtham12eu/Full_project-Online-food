const express = require('express');
const { getOrder } = require('../Controller/OrderController');
const orderModel = require('../Module/OrderModule');

module.exports = (dbConnection) => {
  const router = express.Router();
  const Order = orderModel(dbConnection);

  router.get('/order', (req, res) => {
    req.order = Order;
    getOrder(req, res);
  });

  router.post('/order', async (req, res) => {
    const {
      order_name,
      order_ID,
      date_time,
      payment_status,
      payment_method,
      order_status
    } = req.body;

    console.log("Received body:", req.body);

    try {
      const newData = new Order({
        order_name,
        order_ID,
        date_time,
        payment_status,
        payment_method,
        order_status
      });

      const savedData = await newData.save();
      res.status(201).json(savedData);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  return router;
};
