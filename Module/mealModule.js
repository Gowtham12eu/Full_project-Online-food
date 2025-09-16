const mongoose = require('mongoose');

module.exports = (connection) => {
    const mealSchema = new mongoose.Schema({
        name: String,
        price: String,
        category: String,
        ingredients: String,
        image: String,
        isAvailable: Boolean
    });

    return connection.model('meal', mealSchema);
};
