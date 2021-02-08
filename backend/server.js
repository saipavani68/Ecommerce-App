const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRoutes = express.Router();
const PORT = 4000;

let users = require('./users.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

usersRoutes.route('/add').post(function(req, res) {
    let user = new users(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'message': 'Registration successful'});
        })
        .catch(err => {
            res.status(400).send('FAILURE');
        });
});

app.use('/users', usersRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
