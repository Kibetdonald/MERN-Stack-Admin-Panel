const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('Dotenv/config');

//Creating our application and firing the function
const app = express();

//Declaring out evironment variable for port
const port = process.env.port;
const connecter = process.env.dbconnection;

//middleware
app.use(cors());
app.use(express.json());


mongoose.connect(connecter,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true

    }
).then( ()=> {
    console.log('Database connected')
});



//requiring the files
const categoriesRouter = require('./routes/categoriesRoute');
const productRouter = require('./routes/productsRoute');
const authentify = require('./routes/auth');


//using the files
app.use('/signin', authentify)
app.use('/products', productRouter);
app.use('/categories', categoriesRouter)



app.listen(port, ()=>{
    console.log(`Connected to port ${port}`)
});



