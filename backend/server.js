const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRoutes = express.Router();
const PORT = 4000;

let users = require('./users.model');
let Item = require('./item.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/', { 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
}); 

const connection = mongoose.connection;

connection.once('open', function() {
    Item.deleteMany({}).then(function(){
        Item.insertMany([ 
            { id: 1, title: "Apple - MacBook Pro - 13 inch Display with Touch Bar - Intel Core i5 - 8GB Memory - 256GB SSD - Space Gray", description: " ", category: "electronics", image_name: "macbookpro.jpg", price: 1099.99 }
        ]).then(function(){ 
            console.log("Data inserted")  // Success 
        }).catch(function(error){ 
            console.log(error)      // Failure 
        }); 
    });
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
