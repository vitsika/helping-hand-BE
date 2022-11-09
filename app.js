const express = require('express');
var Product = require('./model/product')
//permet de bien manoeuvrer le json
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();



// /* -------Laza---------------------*/

mongoose.connect('mongodb+srv://LazaKely:<ohpasdemdp>@cluster0.otujmy1.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));



//Pour gérer erreur CORS la requête POST venant de l'application front-end,
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParser.json());

/*---------------------------------*/
app.post('/api/product', (req, res, next) => {
    const product = new Product({
        ...req.body
    });
    product.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));
});

app.use('/api/product', (req, res, next) => {
    Product.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
});


// })
/*----------------------------------------------*/

/* lecture en dure */

// app.use('/api/product', (req, res, next) => {
//     const product = [
//         {
//             "name": "Sac de Riz Blanc Makalioka 50 kg",
//             "description": "Riz blanc 50kg Makalioka de Madagascar.",
//             "category": [
//                 {
//                     "name": "Ppn",
//                     "created-at": "2022-10-16T16:50:05.815z",
//                     "updated_at": "2019-11-20T20:21:55.510Z"
//                 }
//             ],
//             "imageUrl": [
//                 "/assets/images/products_ppn/ppn_riz/ppn_riz_1/1.jpeg"
//             ],
//             "euro_price": 4999,
//             "ariary_price": 200000,
//             "created-at": "2022-10-16T16:50:05.815z"
//         },
//         {
//             "name": "Sac de Riz Blanc Makalioka 25 kg",
//             "description": "Riz blanc 25kg Makalioka de Madagascar.",
//             "category": [
//                 {
//                     "name": "Ppn",
//                     "created-at": "2022-10-16T16:50:05.815z",
//                     "updated_at": "2019-11-20T20:21:55.510Z"
//                 }
//             ],
//             "imageUrl": [
//                 "/assets/images/products_ppn/ppn_riz/ppn_riz_2/1.jpeg"
//             ],
//             "euro_price": 2599,
//             "ariary_price": 100000,
//             "created-at": "2022-10-16T16:50:05.815z"
//         },
//         {
//             "name": "Lot de 10 Spaghetti 1kg",
//             "description": "Spaghetti Marque Maison de 1kg",
//             "category": [
//                 {
//                     "name": "Ppn",
//                     "created-at": "2022-10-16T16:50:05.815z",
//                     "updated_at": "2019-11-20T20:21:55.510Z"
//                 }
//             ],
//             "imageUrl": [
//                 "/assets/images/products_ppn/ppn_pattes/ppn_pattes_1/1.jpeg"
//             ],
//             "euro_price": 1599,
//             "ariary_price": 500000,
//             "created-at": "2022-10-16T16:50:05.815z"
//         },
//         {
//             "name": "Lot de 10 Tagliatelle 500g",
//             "description": "Tagliatelle nature aux œufs 500g",
//             "category": [
//                 {
//                     "name": "Ppn",
//                     "created-at": "2022-10-16T16:50:05.815z",
//                     "updated_at": "2019-11-20T20:21:55.510Z"
//                 }
//             ],
//             "imageUrl": [
//                 "/assets/images/products_ppn/ppn_pattes/ppn_pattes_2/2.jpeg"
//             ],
//             "euro_price": 1599,
//             "ariary_price": 200000,
//             "created-at": "2022-10-16T16:50:05.815z"
//         },
//         {
//             "name": "Lot 10 sachets de sucre 1 kg",
//             "description": "Sucre roux d'amiblobe ",
//             "category": [
//                 {
//                     "name": "Ppn",
//                     "created-at": "2022-10-16T16:50:05.815z",
//                     "updated_at": "2019-11-20T20:21:55.510Z"
//                 }
//             ],
//             "imageUrl": [
//                 "/assets/images/products_ppn/ppn_sucre/1.jpeg"
//             ],
//             "euro_price": 1699,
//             "ariary_price": 200000,
//             "created-at": "2022-10-16T16:50:05.815z"
//         },
//         {
//             "name": "Lot 10 farines Ramatoa 1kg ",
//             "description": "Farine Ramatoa multi-usage",
//             "category": [
//                 {
//                     "name": "Ppn",
//                     "created-at": "2022-10-16T16:50:05.815z",
//                     "updated_at": "2019-11-20T20:21:55.510Z"
//                 }
//             ],
//             "imageUrl": [
//                 "/assets/images/products_ppn/ppn_farine/1.jpeg"
//             ],
//             "euro_price": 1399,
//             "ariary_price": 200000,
//             "created-at": "2022-10-16T16:50:05.815z"
//         },
//         {
//             "name": "Lot  5 haricots Ramatoa 1 kg",
//             "description": "Haricots secs Ramatoa",
//             "category": [
//                 {
//                     "name": "Ppn",
//                     "created-at": "2022-10-16T16:50:05.815z",
//                     "updated_at": "2019-11-20T20:21:55.510Z"
//                 }
//             ],
//             "imageUrl": [
//                 "/assets/images/products_ppn/ppn_haricots/1.jpeg"
//             ],
//             "euro_price": 9699,
//             "ariary_price": 200000,
//             "created-at": "2022-10-16T16:50:05.815z"
//         },
//         {
//             "name": "Huile de soja Hina 20l",
//             "description": "Huile de soja Hina sans additifs",
//             "category": [
//                 {
//                     "name": "Ppn",
//                     "created-at": "2022-10-16T16:50:05.815z",
//                     "updated_at": "2019-11-20T20:21:55.510Z"
//                 }
//             ],
//             "imageUrl": [
//                 "/assets/images/products_ppn/ppn_huile/1.jpeg"
//             ],
//             "euro_price": 6899,
//             "ariary_price": 200000,
//             "created-at": "2022-10-16T16:50:05.815z"
//         },
//         {
//             "name": "Lot de 10 Savons Superclair",
//             "description": "Savon de madagascar",
//             "category": [
//                 {
//                     "name": "Sante - Hygiene",
//                     "created-at": "2022-10-16T16:50:05.815z",
//                     "updated_at": "2019-11-20T20:21:55.510Z"
//                 }
//             ],
//             "imageUrl": [
//                 "/assets/images/products_hygiene/hygiene_savon/hygiene_savon_1/1.jpeg"
//             ],
//             "euro_price": 4999,
//             "ariary_price": 200000,
//             "created-at": "2022-10-16T16:50:05.815z"
//         },
//         {
//             "name": "Savon de Marseille",
//             "description": "savon de Madagascar.",
//             "category": [
//                 {
//                     "name": "Sante - Hygiene",
//                     "created-at": "2022-10-16T16:50:05.815z",
//                     "updated_at": "2019-11-20T20:21:55.510Z"
//                 }
//             ],
//             "imageUrl": [
//                 "/assets/images/products_hygiene/hygiene_savon/hygiene_savon_2/1.jpeg"
//             ],
//             "euro_price": 2599,
//             "ariary_price": 100000,
//             "created-at": "2022-10-16T16:50:05.815z"
//         },
//         {
//             "name": "10 savons Nosy de  Mada",
//             "description": "savon de Madagascar.",
//             "category": [
//                 {
//                     "name": "Sante - Hygiene",
//                     "created-at": "2022-10-16T16:50:05.815z",
//                     "updated_at": "2019-11-20T20:21:55.510Z"
//                 }
//             ],
//             "imageUrl": [
//                 "/assets/images/products_hygiene/hygiene_savon/hygiene_savon_3/1.jpeg"
//             ],
//             "euro_price": 1599,
//             "ariary_price": 500000,
//             "created-at": "2022-10-16T16:50:05.815z"
//         },
//         {
//             "name": " 5 barres de savon Nosy de Mada",
//             "description": "savon de Madagascar.",
//             "category": [
//                 {
//                     "name": "Sante - Hygiene",
//                     "created-at": "2022-10-16T16:50:05.815z",
//                     "updated_at": "2019-11-20T20:21:55.510Z"
//                 }
//             ],
//             "imageUrl": [
//                 "/assets/images/products_hygiene/hygiene_savon/hygiene_savon_4/1.jpeg"
//             ],
//             "euro_price": 1599,
//             "ariary_price": 200000,
//             "created-at": "2022-10-16T16:50:05.815z"
//         },
//         {
//             "name": " 5 Gel douche 750ml",
//             "description": "Gel et bain de douche moussant fleur 750ml ",
//             "category": [
//                 {
//                     "name": "Sante - Hygiene",
//                     "created-at": "2022-10-16T16:50:05.815z",
//                     "updated_at": "2019-11-20T20:21:55.510Z"
//                 }
//             ],
//             "imageUrl": [
//                 "/assets/images/products_hygiene/hygiene_savon/gel_douche/1.jpeg"
//             ],
//             "euro_price": 1699,
//             "ariary_price": 200000,
//             "created-at": "2022-10-16T16:50:05.815z"
//         },
//         {
//             "name": "Lot 5 seaux  ",
//             "description": "Seau de 10l ",
//             "category": [
//                 {
//                     "name": "Sante - Hygiene",
//                     "created-at": "2022-10-16T16:50:05.815z",
//                     "updated_at": "2019-11-20T20:21:55.510Z"
//                 }
//             ],
//             "imageUrl": [
//                 "/assets/images/products_hygiene/hygiene_seau/1.jpeg"
//             ],
//             "euro_price": 1399,
//             "ariary_price": 200000,
//             "created-at": "2022-10-16T16:50:05.815z"
//         },
//         {
//             "name": "Lot  5 dentifrice colgate",
//             "description": "Dentifrice colgate ",
//             "category": [
//                 {
//                     "name": "Sante - Hygiene",
//                     "created-at": "2022-10-16T16:50:05.815z",
//                     "updated_at": "2019-11-20T20:21:55.510Z"
//                 }
//             ],
//             "imageUrl": [
//                 "/assets/images/products_hygiene/dentifrice/1.jpeg"
//             ],
//             "euro_price": 9699,
//             "ariary_price": 200000,
//             "created-at": "2022-10-16T16:50:05.815z"
//         },
//         {
//             "name": "Lot de 10 Couches",
//             "description": "10 couches pampers ",
//             "category": [
//                 {
//                     "name": "Sante - Hygiene",
//                     "created-at": "2022-10-16T16:50:05.815z",
//                     "updated_at": "2019-11-20T20:21:55.510Z"
//                 }
//             ],
//             "imageUrl": [
//                 "/assets/images/products_hygiene/couches/1.jpeg"
//             ],
//             "euro_price": 6899,
//             "ariary_price": 200000,
//             "created-at": "2022-10-16T16:50:05.815z"
//         }
//     ]
//     res.status(200).json(product);
// });

module.exports = app;


/*------------------------------------------------------------------------------------------------*/



