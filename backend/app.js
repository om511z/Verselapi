const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors());
if(process.env.NODE_ENV === 'PRODUCTION') require('dotenv').config({ path: 'backend/config/config.env'})

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));


const product = require('./routes/product');

const html = require('./routes/html');
const csharp = require('./routes/csharp')
const java = require('./routes/java')
app.use('/api/v2',product)
app.use('/api/v2',html)
app.use('/api/v2',csharp)
app.use('/api/v2',java)




module.exports = app;