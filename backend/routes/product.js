const express = require('express')
const router = express.Router();


const { 
    getProducts, 
    newProduct, 
    getSingleProduct, 
    updateProduct, 
    deleteProduct 
} = require('../controllers/productController')

const { isAuthenitcatedUser } = require('../middlewares/auth');


router.route('/products').get( getProducts);

router.route('/product/:id').get(getSingleProduct);

router.route('/admin/product/new').post(isAuthenitcatedUser, newProduct);

router.route('/admin/product/:id')
                                .put(isAuthenitcatedUser,updateProduct)
                                .delete(isAuthenitcatedUser,deleteProduct);

module.exports = router;