const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI)
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Database connection failed', err));
}

module.exports = connectDatabase;