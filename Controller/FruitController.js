exports.fruitproduct = async (req, res) => {
    try {
        const fruits = await req.fruit.find({});
        res.status(200).json({ success: true, data: fruits });
    } catch(err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

exports.singlefruitproduct = async (req, res) => {
    try {
        const fruit = await req.fruit.findById(req.params.id);
        if (!fruit) {
            return res.status(404).json({ success: false, message: "Fruit not found" });
        }
        res.status(200).json({ success: true, data: fruit });
    } catch(err) {
        res.status(500).json({ success: false, error: err.message });
    }
}
