const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conn = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        // TODO: Remove console log
        // console.log('connected');
    } catch (error) {
        process.exit(1); // stop the app
    }
}

module.exports = conn;