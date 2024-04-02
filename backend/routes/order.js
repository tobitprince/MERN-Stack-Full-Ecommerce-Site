const express = require('express');
const router = express.Router();

const { createOrder } = require('../controllers/orderController');
const { isAuthenticatedUser, authorizedRoles } = require('../middlewares/auth');

router.route('/order/new').post(isAuthenticatedUser, createOrder);

module.exports = router;