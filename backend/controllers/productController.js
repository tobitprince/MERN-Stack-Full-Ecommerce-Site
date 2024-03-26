const Product = require("../models/product");

const ErrorHandler = require("../utils/errorHandler");
const APIFeatures = require("../utils/apiFeatures");

// Create new product   =>   /api/v1/admin/product/new
exports.newProduct = async (req, res, next) => {


    
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product,
    });
}

// get all products in the database
exports.getProducts = async (req, res, next) => {

    const resPerPage = 4;
    const productCount = await Product.countDocuments();


    const apiFeatures = new APIFeatures(Product.find(), req.query)
                        .search()
                        .filter()
                        .pagination(resPerPage)
    const products = await apiFeatures.query;
    res.status(200).json({
        succes: true,
        count: products.length,
        productCount,
        products
    })
}

//get single product details  /api/v1/product/:id

exports.getSingleProduct =async (req, res, next) => {
    const product = await Product.findById(req.params.id)

    if(!product) {
        return next(new ErrorHandler('Product not found', 404));
    }

    res.status(200).json({
        success: true,
        product
    })
}

//update product   /api/v1/admin/product/:id

exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler('Product not found', 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false

    });

    res.status(200).json({
        success: true,
        product
    })
}

//Delete Product /api/v1/admin/product/:id
exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if(!product) {
        return res.status(404).json({
        	success: false,
        	message: 'Product not found'
        })
    
    }

    await product.deleteOne();

    res.status(200).json({
        success: true,
        message: 'Product is deleted'
    })
}