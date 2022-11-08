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
        type: Date,
        required: true
    },
    updated_at: {
        type: Date
    },
});

module.exports = mongoose.model('Product', productSchema);





/* --------------YVES-------------------

function Product(id, nom, description) {      
    this.id = id || null;
    this.nom  = nom  || null;
    this.description = description || null
    
}

Product.prototype.getId = function() {
    return this.id;
}

Product.prototype.setId = function(id) {
    this.id = id;
}

Product.prototype.getName = function() {
    return this.name;
}

Product.prototype.setName = function(name) {
    this.name = name;
}

Product.prototype.getDescription = function() {
    return this.description;
}

Product.prototype.setDescription = function(description) {
    this.description = description;
}
*/


// module.exports = Product;     // Export the Product function as it is 