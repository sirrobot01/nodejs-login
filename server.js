const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const mongoose = require('./config/database');
const app = express();
var jwt = require('jsonwebtoken');

app.set('secretKey', 'nodeRestAPI');
mongoose.connection.on('error', console.error.bind(console, 'Mongoose connection error:'));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
     res.json({"Tutorial": "Build REST API with NodeJS"});
});

// public route

app.use('/users', users);

//add 404

app.use((err, req, res, next) => {
    console.log(err)

    if(err.status === 404){
        res.status(404).json({message:"Not Found"});
    } else{
        res.status(500).json({message:'Something looks wrong'});
    }
});




app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});

