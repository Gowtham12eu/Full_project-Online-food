const express = require('express');
const MealModel = require('../Module/mealModule');

module.exports = (dbConnection) => {
  const router = express.Router();
  const Meal = MealModel(dbConnection);

  router.get('/meat', async (req, res) => {
    try {
      const result = await Meal.find({});
      res.status(200).json({ data: result });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  router.get('/meat/:id', async (req, res) => {
    try {
      const result = await Meal.findById(req.params.id);
      res.status(200).json({ data: result });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  return router;
};
