const express = require('express')
const app =express()
const router = express.Router()
const usercontrol = require('../controllers/user.controller')

router.post('/auth/signup' ,usercontrol.signUp);

router.post('/auth/login' ,usercontrol.login);

router.post('/auth/logout' ,usercontrol.logout);

router.get('/coupons',usercontrol.getCouponCode);

router.post('/bookings',usercontrol.bookShow);

module.exports = router;