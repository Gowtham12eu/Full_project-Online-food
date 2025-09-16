const mongoose=require('mongoose')

module.exports=(connection)=>{
const FruitSchema=new mongoose.Schema
(
    {
        name:String,
        price:String,
        color:String,
        sweetnessLevel:String,
        season:String,
        isAvailable:Boolean,
        image:String
    }
)
return connection.model('Fruits',FruitSchema)
}