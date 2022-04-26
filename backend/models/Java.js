const mongoose = require('mongoose')

const javaSchema = new mongoose.Schema({
    projectname:{
        type:String,
        required:true,
        trim:true,
        maxLength:[100,'Name cannot exceed 100 characters']
    },
    mainimg:{
        public_id:{
            type: String,
            required:true
        },
        url:{
            type:String,
            required: true
        }
    },

    description:{
        type:String,
        required:true
    },
    viewdemolink:{
        type:String,
        required:true
    },
    frontend:{
         type:String,
        required:true
    },
    backend:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    contactno:{
        type:String,
        required:true
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Java',javaSchema)