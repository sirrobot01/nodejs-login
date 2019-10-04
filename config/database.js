const mongoose = require('mongoose');
const  mongoDB = 'mongodb://localhost/login';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;


module.exports = mongoose;