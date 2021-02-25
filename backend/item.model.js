const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    image_name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});


module.exports = mongoose.model('item', ItemSchema);