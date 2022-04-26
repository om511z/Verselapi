const Javavisitor = require('../models/javavisitor')
const Java = require('../models/Java')

exports.getJavavistors = async (req,res,next) =>{

    let visitor = await Javavisitor.findOne();

    if(visitor == null) {
        const beginCount = new Javavisitor({
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



exports.getjavaproducts = async (req,res,next) =>{

    const javaproducts = await Java.find();
    res.status(200).json({
        success:true,
       javaproducts
    })
}




exports.getSingleProduct = async(req,res,next) =>{
    const Javaproduct = await Java.findById(req.params.id);

    res.status(200).json({
        success:true,
        Javaproduct

    })
}

