import {Router} from 'express'
import { login, adminLogin, register } from '../controllers/user.controller.js'

const router = Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/admin').post(adminLogin)

export default router;