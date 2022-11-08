//Utiliser mongoose pour utiliser le schema mongoose
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: true
    },
    imageUrl: {
        type: Array,
        required: true
    },
    euro_price: {
        type: Number,
        required: true
    },
    ariary_price: {
        type: Number,
        required: true
    },
    created_at: {
        type: String,
    },
    updated_at: {
        type: String
    },
});

module.exports = mongoose.model('Product', productSchema);

