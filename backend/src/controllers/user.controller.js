import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import validator from 'validator'
import { User } from '../models/user.model.js'
import jwt from 'jsonwebtoken'

const generateUserToken = async function(userId){
   try {
     const user = await User.findById(userId)
     if(!user){
         throw new ApiError(404,"User Not Found while generate tokens")
     }
 
     const token = user.generateJwtToken()
     return token;
   } catch (error) {

        if (error instanceof ApiError) {
            throw error  
        }

        throw new ApiError(500, "Something went wrong while generating token")
    }
}


const register = asyncHandler(async (req , res) => {
    const {name,email,password} = req.body

    if (!name?.trim() || !email?.trim() || !password?.trim()) {
        throw new ApiError(400, "All fields are required")
    }

    if(!validator.isEmail(email.trim())){
        throw new ApiError(400,"Invalid email")
    }

    const existUser = await User.findOne({email : email.trim()})
    if(existUser){
        throw new ApiError(409,"User Already exist")
    }

    if(password.length < 8){
        throw new ApiError(400,"Password must be 8 characters")
    }

    const user = await User.create({
        name,
        email:email.trim(),
        password
    })

    const token = await generateUserToken(user._id)
    const createdUser = await User.findById(user._id).select("-password")

    const option = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict"
    }

    res
    .status(201)
    .cookie("token",token,option)
    .json(
        new ApiResponse(201,createdUser,"User Registered Successfully")
    )

})

const login = asyncHandler(async(req , res) => {
    const {email,password} = req.body
    if(email.trim() == '' || !password?.trim()){
        throw new ApiError(400, "All Filds are required")
    }

    if(!validator.isEmail(email.trim())){
        throw new ApiError(400,"Invalid email")
    }

    const user = await User.findOne({email:email.trim()})

    if(!user){
       throw new ApiError(401,"Invalid email or password")
    }

    const passwordCheck = await user.isPasswordCorrect(password)

    if(!passwordCheck){
        throw new ApiError(401,"Invalid email or password")
    }

    const token = await generateUserToken(user._id);

    const safeUser = user.toObject()
    delete safeUser.password

    const option = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict"
    }

    res.status(200)
    .cookie("token",token,option)
    .json(
        new ApiResponse(200,safeUser,"User successfully login")
    )


})

const adminLogin = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    if (
        email === process.env.ADMIN_EMAIL &&
        password === process.env.ADMIN_PASSWORD
    ) {

        const token = jwt.sign(
            { 
              email,
              role: "admin"
            },
            process.env.ADMIN_JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res
            .status(200)
            .cookie("adminToken", token, {
                httpOnly: true,
                secure: true,
                sameSite: "strict"
            })
            .json(
                new ApiResponse(200, null, "Admin Login Successfully")
            );

    } else {
        throw new ApiError(401, "Invalid Admin Credentials");
    }

});

export{
    register,login,adminLogin
}