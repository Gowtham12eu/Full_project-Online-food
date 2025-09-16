exports.vegetableproduct = async(req,res,next)=>
{
    try{
        const vegetable=await req.vegetable.find({});
        res.json(
            {
                success:true,
                vegetable
            }
        )
    }catch(err)
    {
        res.status(500).json({
            success:false,
            error:err.message
        })
    }
}

exports.singleVegetableProduct=async(req,res,next)=>
{
    try{
        const vegetable_id=await req.vegetable.findById(req.params.id)
        res.json(
            {
                success:true,
                vegetable_id
            }
        )
    }catch(err)
    {
        res.status(500).json(
            {
                success:false,
                message:err.message
            }
        )
    }
}