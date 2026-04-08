import { Router } from 'express'
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus} from '../controllers/order.controller.js'
import adminAuth from '../middlewares/adminAuth.js'
import authUser from '../middlewares/auth.js'

const router = Router()

//Admin Features
router.route('/list').post(adminAuth, allOrders)
router.route('/status').post(adminAuth, updateStatus)

//Payment Features
router.route('/place').post(authUser,placeOrder)
router.route('/stripe').post(authUser,placeOrderStripe)
router.route('/razorpay').post(authUser,placeOrderRazorpay)

//User Features
router.route('/userorders').post(authUser,userOrders)

export default router
