import { Router } from "express";
import { addProducts, listProducts, removeProduct, singleProduct } from "../controllers/product.controller.js";
import {upload} from '../middlewares/multer.js'
import adminAuth from "../middlewares/adminAuth.js";

const router = Router()

router.route("/add").post(adminAuth,upload.fields([
    {name:'image1',maxCount:1},
    {name:'image2',maxCount:1},
    {name:'image3',maxCount:1},
    {name:'image4',maxCount:1},
]) , addProducts)
router.route("/remove").post(adminAuth,removeProduct)
router.route("/single").post(singleProduct)
router.route("/list").get(listProducts)

export default router