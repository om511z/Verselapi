const mongoose = require('mongoose')

const csharpvisitorSchema = new mongoose.Schema({
  count:{
      type:Number
  }
})

module.exports = mongoose.model('Csharpvisitor',csharpvisitorSchema)