// const Product = require('../model/product');

// exports.createProduct = (req, res) => {
//     const prod = new Product(
//     //     {
//     //     name: req.body.name,
//     //     description: req.body.description,
//     //     imageUrl: req.body.imageUrl,
//     //     category: req.body.category,
//     //     euro_price: req.body.euro_price,
//     //     ariary_price: req.body.ariary_price,
//     //     created_at: req.body.created_at,
//     //     updated_at: req.body.updated_at,
//     // }
//     req.body
//     );

//     prod.save()
//     .then((product) => {
//         return res.status(201).json({product})
//     })
//     .catch((error) => {return res.status(400).json({error}) });
// }