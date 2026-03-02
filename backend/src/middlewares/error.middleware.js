import {ApiResponse} from '../utils/ApiResponse.js'

export const errorMiddleware = (err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "something went wrong"

   
   return res.status(statusCode).json({
    statusCode,
    success: statusCode < 400,
    message,
    data: {}
  });
}