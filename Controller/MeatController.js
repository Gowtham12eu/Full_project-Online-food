exports.meatproduct = async (req, res, next) => {
    try {
        const Meat = await req.Meal.find({});
        res.json({
            success: true,
            Meat
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};

exports.singleMealProduct = async (req, res, next) => {
    try {
        const Meat_id = await req.Meal.findById(req.params.id);
        console.log(Meat_id);
        
        res.json({
            success: true,
            Meat_id
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};
