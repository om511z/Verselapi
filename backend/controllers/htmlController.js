const Html = require('../models/html')
const Htmlvisitor = require('../models/htmlvisitor')



exports.getHtmlproducts = async (req,res,next) =>{

    const htmlproducts = await Html.find();
    res.status(200).json({
        success:true,
       htmlproducts
    })
}


exports.getHtmlvistors = async (req,res,next) =>{

    let visitor = await Htmlvisitor.findOne();

    if(visitor == null) {
        const beginCount = new Htmlvisitor({
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



exports.getSinglehtmlProduct = async(req,res,next) =>{
    const Htmlproduct = await Html.findById(req.params.id);

    if(!Htmlproduct) {
        return next(new ErrorHandler('Product not found',404))
    }

    res.status(200).json({
        success:true,
        Htmlproduct

    })
}


