const express = require('express')
const router = express.Router();


const { 
    getProducts, 
    newProduct, 
    getSingleProduct, 
    updateProduct, 
    deleteProduct 
} = require('../controllers/productController')

const { isAuthenitcatedUser, authorizedRoles } = require('../middlewares/auth');


router.route('/products').get(getProducts);

router.route('/product/:id').get(getSingleProduct);

router.route('/admin/product/new').post(isAuthenitcatedUser, authorizedRoles('admin'), newProduct);

router.route('/admin/product/:id')
                                .put(isAuthenitcatedUser, authorizedRoles('admin'), updateProduct)
                                .delete(isAuthenitcatedUser, authorizedRoles('admin'), deleteProduct);

module.exports = router;