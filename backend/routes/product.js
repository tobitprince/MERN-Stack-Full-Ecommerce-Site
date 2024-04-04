const express = require('express')
const router = express.Router();
const upload = require("../utils/multer");


const { 
    getProducts, 
    newProduct, 
    getSingleProduct, 
    updateProduct, 
    deleteProduct,

    //reviews
    createProductReview,
    getProductReviews,
    deleteReview,

    getAdminProducts,
    productSales,
} = require('../controllers/productController')

const { isAuthenticatedUser, authorizedRoles } = require('../middlewares/auth');


router.route('/products').get(getProducts);

router.route('/product/:id').get(getSingleProduct);

router.route('/admin/product/new').post(isAuthenticatedUser, authorizedRoles('admin'), newProduct);

router.route('/admin/product/:id')
                                .put(isAuthenticatedUser, authorizedRoles('admin'), updateProduct)
                                .delete(isAuthenticatedUser, authorizedRoles('admin'), deleteProduct);

router.route('/review').put(isAuthenticatedUser, createProductReview);
router.route('/reviews').get(isAuthenticatedUser, getProductReviews);
router.route('/reviews').delete(isAuthenticatedUser, deleteReview);
router.get('/admin/products', isAuthenticatedUser, authorizedRoles('admin'),getAdminProducts);
router.post('/admin/product/new', isAuthenticatedUser, authorizedRoles('admin'), upload.array('images', 10),newProduct);
router.get('/admin/products/sales', productSales);

module.exports = router;