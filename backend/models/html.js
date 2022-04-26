const mongoose = require('mongoose')

const htmlSchema = new mongoose.Schema({
    projectname:{
        type:String,
        required:true,
        trim:true,
        maxLength:[100,'Name cannot exceed 100 characters']
    },
    images:[
        {
            public_id: {
                type:String,
                required:true
            },
            url: {
                type:String,
                required:true
            }
        }
    ],
    description:{
        type:String,
        required:true
    },
    viewdemolink:{
        type:String,
        required:true
    },
    downloadlink:{
        type:String,
        required:true
    },
    createrName:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Html',htmlSchema)