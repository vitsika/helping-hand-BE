// Fichier qui contient notre application

//Importer express avec la cmd require

const express = require('express');

//un variable app qui contient notre application

const app = express();

//
app.use((req, res)=>{
    res.json({ message: 'Votre requete a ete recu !'})
})

//et on va exporter notre variable app qu'on puisse y acceder notament dans notre server node

module.exports = app;