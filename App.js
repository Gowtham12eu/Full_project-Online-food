const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors=require('cors');
const connectDB = require('./config/ConnectingDataBase');
const MeatRouter = require('./Router/MeatRouter');
const vegetableRouter=require('./Router/VegetableRouter')
const fruitRouter=require('./Router/FruitRouter')
const orderRouter=require('./Router/OrderRouter')
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const { DB4,DB1,DB2,DB3 } = connectDB(); // Use DB1 for meals
app.use(express.json());
app.use(cors()) 
app.use('/api/v1', MeatRouter(DB4)); // Pass DB1 to router
app.use('/api/v1',vegetableRouter(DB1))
app.use('/api/v1',fruitRouter(DB2))
app.use('/api/v1',orderRouter(DB3))
app.listen(process.env.PORT, () => {
    console.log(`Server PORT ${process.env.PORT} is running Successfully`);
});
