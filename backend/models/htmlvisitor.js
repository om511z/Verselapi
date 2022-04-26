const mongoose = require('mongoose')

const htmlvisitorSchema = new mongoose.Schema({
  count:{
      type:Number
  }
})

module.exports = mongoose.model('Htmlvisitor',htmlvisitorSchema)