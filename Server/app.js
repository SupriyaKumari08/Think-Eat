const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

app.use(cors());

dotenv.config({path : './config.env'});


const PORT = process.env.PORT

require('./db/conn')
// const User = require('./model/signUpSchema');
app.use(express.json())
app.use(require('./routes/auth'))

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
})