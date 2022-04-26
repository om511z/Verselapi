const mongoose =require('mongoose');

const connectDatabase =() => {
    mongoose.connect(process.env.DATA,{
        useNewUrlParser: true,
        useUnifiedTopology: true
         
    }).then(con => {
        console.log(`Mongo db connected with HOST : ${con.connection.host}`)
    })
}


module.exports = connectDatabase;