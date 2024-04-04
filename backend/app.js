const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const cors = require('cors')
app.use(express.json({ limit: '100mb' }));
// app.set("trust proxy", 1);
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true}))

const errorMiddleware = require('./middlewares/errors');
app.use(express.json());
app.use(cookieParser());



//import all routes
const products = require('./routes/product');
const auth = require('./routes/auth');
const order = require('./routes/order');

app.use('/api/v1', products)
app.use('/api/v1', auth)
app.use('/api/v1', order)


//middleware to handle errors
app.use(errorMiddleware);

module.exports = app