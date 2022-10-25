function Product(id, name, description) {      
    this.id = id || null;
    this.name  = name  || null;
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

Product.prototype.setName = function(description) {
    this.description = description;
}



module.exports = Product;     // Export the Cat function as it is