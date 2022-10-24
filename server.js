//Importer le package http de node
const { application } = require('express');
const http = require('http');

//Importer notre application
const app = require('./app')

//indiquer a l'application express sur quel PORT, elle va tourner
app.set('port', process.env.PORT || 3000);

//Créer un serveur, et appeler la methode "createServer" du package http, at afficher notre app

const server = http.createServer(app);


//Le serveur attend la requete envoyer et mettre le numero de PORT a utiliser
server.listen(process.env.PORT || 3000);