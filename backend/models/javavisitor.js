const mongoose = require('mongoose')

const javavisitorSchema = new mongoose.Schema({
  count:{
      type:Number
  }
})

module.exports = mongoose.model('Javavisitor',javavisitorSchema)