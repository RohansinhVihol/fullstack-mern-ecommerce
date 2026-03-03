import { asyncHandler } from '../utils/asyncHandler.js'
import {v2 as cloudinary} from 'cloudinary'
import { Product } from '../models/product.model.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { ApiError } from '../utils/ApiError.js'
import { isValidObjectId } from 'mongoose'

//Function for add product
const addProducts = asyncHandler(async (req, res) => {

    const { name, description, price, category, subCategory, sizes, bestseller } = req.body

    if (!name || !price || !category) {
        throw new ApiError(400, "Required fields missing")
    }

    const image1 = req.files?.image1?.[0]
    const image2 = req.files?.image2?.[0]
    const image3 = req.files?.image3?.[0]
    const image4 = req.files?.image4?.[0]

    const image = [image1,image2,image3,image4].filter((item) => item != undefined)

    if (image.length === 0) {
        throw new ApiError(400, "At least one image is required")
    }

    let imagesUrl = await Promise.all( 
        image.map(async(item) => {
            let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'})
            return result.secure_url
        })
    )

    const productData = await Product.create({
        name,
        description,
        category,
        price : Number(price),
        subCategory,
        bestseller: bestseller === 'true' ? true : false,
        sizes: JSON.parse(sizes),
        image: imagesUrl,
        date: Date.now()
    })

    console.log(productData)

    res
    .status(200)
    .json(
        new ApiResponse(200, productData, "Product Added")
    )
    
})

//Function for list product
const listProducts = asyncHandler(async (req, res) => {
    
    const products = await Product.find({});

    res
    .status(200)
    .json(
        new ApiResponse(200, products, products.length === 0 
                ? "Products list is empty" 
                : "Products Fetched Successfully"
    ))

})

//Function for removing product
const removeProduct = asyncHandler(async(req, res) => {

    const {id} = req.body

    if(!isValidObjectId(id)){
        throw new ApiError(400, "Invalid ProductId")
    }

    const deletedProduct = await Product.findByIdAndDelete(id)

    if(!deletedProduct){
        throw new ApiError(404, "Product Not Found")
    }

    res
    .status(200)
    .json(
        new ApiResponse(200, {}, "Product Removed")
    )

})

//Function for single product info
const singleProduct = asyncHandler(async (req, res) => {

    const {productId} = req.body

    if(!isValidObjectId(productId)){
        throw new ApiError(400, "Invalid product Id")
    }

    const product = await Product.findById(productId)

    if(!product){
        throw new ApiError(404, "Product Not Found")
    }

    res
    .status(200)
    .json(
        new ApiResponse(200, product, "Product Fetched Successfully")
    )

})

export {
    addProducts,
    listProducts,
    removeProduct,
    singleProduct
}




