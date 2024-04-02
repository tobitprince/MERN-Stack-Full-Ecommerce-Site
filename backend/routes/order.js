const express = require('express');
const router = express.Router();

const { 
    createOrder,
    getSingleOrder,
    myOrders,

    //admin
    allOrders,
    updateOrder,
    deleteOrder
 } = require('../controllers/orderController');
const { isAuthenticatedUser, authorizedRoles } = require('../middlewares/auth');

router.route('/order/new').post(isAuthenticatedUser, createOrder);

router.route('/order/:id').get(isAuthenticatedUser, getSingleOrder);
router.route('/orders/me').get(isAuthenticatedUser, myOrders);

//admin routes
router.route('/admin/orders').get(isAuthenticatedUser, authorizedRoles('admin'), allOrders);
router.route('/admin/order/:id').put(isAuthenticatedUser, authorizedRoles('admin'), updateOrder);
router.route('/admin/order/:id').delete(isAuthenticatedUser, authorizedRoles('admin'), deleteOrder);

module.exports = router;