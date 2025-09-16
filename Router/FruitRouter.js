const express = require('express');
const fruitmodule = require('../Module/FruitModule');

module.exports = (dbconnection) => {
  const router = express.Router();
  const Fruit = fruitmodule(dbconnection);

  router.get('/fruit', async (req, res) => {
    try {
      const result = await Fruit.find({});
      res.status(200).json({ data: result });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  router.get('/fruit/:id', async (req, res) => {
    try {
      const result = await Fruit.findById(req.params.id);
      res.status(200).json({ data: result });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  return router;
};
