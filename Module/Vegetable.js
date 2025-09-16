const mongoose=require('mongoose')

module.exports=(connection)=>{
    const VegetableSchema=new mongoose.Schema(
    {
        name:String,
        price:String,
        vitamins:[String],
        color:String,
        type:String,
        image:String,
        isAvailable:Boolean
    })
    return connection.model('Vegetable',VegetableSchema)
}