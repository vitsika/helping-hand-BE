const express = require('express');
var Product = require ('./model/Product')
const app = express();


app.use((req, res, next) => {
    var product = new Product("1231","jhon","Wick")

    //1ere etape, renvoyer la liste en temps que json



    //2eme etape
    // Lire le fichier liste de produits
    // stocker cette liste dans un object contenant un tableau de produit
    //renvoyer l'objet
    res.json(product);
    next();
});

module.exports = app;
