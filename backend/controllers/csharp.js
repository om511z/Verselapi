const Csharp = require('../models/csharp')
const Csharpvisitor = require('../models/csharpvisitor')



exports.getCsharpproducts = async (req,res,next) =>{

    const csharpproject = await Csharp.find();
    res.status(200).json({
        success:true,
        csharpproject
    })
}


exports.getCsharpvistors = async (req,res,next) =>{

    let visitor = await Csharpvisitor.findOne();

    if(visitor == null) {
        const beginCount = new Csharpvisitor({
            count : 1
        })
        beginCount.save()

    } else{
        visitor.count += 1;
        visitor.save();
    }

    res.status(200).json({
        success:true,
        visitor
     
       
    })
}


//get single product /api/v1/product/:id


exports.getSingleProduct = async(req,res,next) =>{
    const product = await Csharp.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler('Product not found',404))
    }

    res.status(200).json({
        success:true,
        product

    })
}

