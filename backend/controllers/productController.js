const Product = require('../models/product')

//create new product
exports.newProduct = async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}


exports.getProducts = (req, res, next) => {
    res.status(200).json({
        succes: true,
        message: 'This route will show all products in the database.'
    })
}