const express = require('express');
const VegetableModel = require('../Module/Vegetable');

module.exports = (dbconnection) => {
  const router = express.Router();
  const Vegetable = VegetableModel(dbconnection);

  router.get('/vegetable', async (req, res) => {
    try {
      const result = await Vegetable.find({});
      res.status(200).json({ data: result });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  router.get('/vegetable/:id', async (req, res) => {
    try {
      const result = await Vegetable.findById(req.params.id);
      res.status(200).json({ data: result });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  return router;
};
