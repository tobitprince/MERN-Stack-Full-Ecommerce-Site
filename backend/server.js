const app = require('./app')
const connectDatabase = require('./config/database')
const dotenv = require('dotenv');

//Handle Uncaught Exception
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server due to Uncaught Exception');
    process.exit(1)
})
//setting up config files
dotenv.config({ path: 'backend/config/config.env'})



//connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})

//handle Unhandle Promise Rejections
process.on('unhandledRejection', (err) => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server due to Unhandle Promise Rejections');
    server.close(() => {
        process.exit(1)
    } )
})