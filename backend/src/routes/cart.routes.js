import {Router}from 'express'
import {addToCart,updateCart,getUserCart} from '../controllers/cart.controller.js'
import authUser from '../middlewares/auth.js'

const router = Router()

router.route('/get').post(authUser,getUserCart)
router.route('/add').post(authUser,addToCart)
router.route('/update').post(authUser,updateCart)

export default router

