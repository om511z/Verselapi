const app = require('./app')
const connectDatabase = require('./config/database')
const dotenv = require('dotenv')

dotenv.config({path:'backend/config/config.env'})
//conntecing to databse
connectDatabase();


const server =app.listen(process.env.PORT, () =>{
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})


//handle unhandle promise rejection

process.on('unhandledRejection', err=>{
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to unhandled promise rejection')
    server.close(() =>{
        process.exit(1)
    })
})
