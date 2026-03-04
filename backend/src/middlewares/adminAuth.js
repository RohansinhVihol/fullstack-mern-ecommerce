import jwt from 'jsonwebtoken'
import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'

const adminAuth = asyncHandler((req,res,next) => {
    try {
        const token = req.cookies.adminToken
    
        if(!token){
            throw new ApiError(401,"Admin Not Logged In")
        }
    
        const decodeData = jwt.verify(token,process.env.ADMIN_JWT_SECRET)
    
        if(decodeData.role != 'admin'){
            throw new ApiError(403,"Access denied")
        }
        req.admin = decodeData
        next()
    } catch (error) {
        if (error instanceof ApiError) {
            throw error; 
        }
        throw new ApiError(401, "Invalid or Expired Token");
    } 
})

export default adminAuth