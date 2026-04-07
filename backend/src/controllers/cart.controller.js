 import { User } from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

 const addToCart = asyncHandler(async(req,res)=>{

    const {userId , itemId, size} = req.body

    const userData = await User.findById(userId)
    let cartData = await userData.cartData

    if(cartData[itemId]){
        if(cartData[itemId][size]){
            cartData[itemId][size] += 1
        }
        else{
            cartData[itemId][size] = 1
        }
    }
    else{
        cartData[itemId] = {}
        cartData[itemId][size] = 1
    }

    await User.findByIdAndUpdate(userId,{
        cartData
    })

    res.status(200)
    .json(
        new ApiResponse(200,{},"Added To Cart")
    )

 })

 const updateCart = asyncHandler(async(req,res) => {

    const {userId, itemId, size, quantity} = req.body

    const userData = await User.findById(userId)
    let cartData = userData.cartData

    cartData[itemId][size] = quantity

    await User.findByIdAndUpdate(userId,{cartData})

    res.status(200)
    .json(
        new ApiResponse(200, {}, "Cart Updated")
    )

 })

 const getUserCart = asyncHandler(async(req,res) => {

    const {userId} = req.body

    const userData = await User.findById(userId)
    let cartData = userData.cartData

    res
    .status(200)
    .json(
        new ApiResponse(200, cartData, "Cart Data Fetched Successfully")
    )

 })

 export{
    addToCart,
    updateCart,
    getUserCart
 }

