const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/JobMagnet').then(() => {
    console.log('Connection successfull');
}).catch((error) => {
    console.error(`Connection failed due to ${error}`);
});

module.exports = mongoose.connection;