const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/api');
require('dotenv').config();

mongoose.connect(process.env.DB_URL,  { useNewUrlParser: true });

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/woofs', routes);


app.listen(process.env.PORT,()=>{
    console.log(`Listening @ ${process.env.PORT}`);
})

