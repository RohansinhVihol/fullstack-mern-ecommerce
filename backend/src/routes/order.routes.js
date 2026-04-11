import { Router } from 'express'
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe, verifyRazorpay} from '../controllers/order.controller.js'
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

//Verify payment
router.route('/verifyStripe').post(authUser,verifyStripe)
router.route('/verifyRazorpay').post(authUser,verifyRazorpay)

export default router
