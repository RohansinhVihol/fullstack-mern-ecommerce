import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken'

const authUser = asyncHandler(async (req, res, next) => {

    const { token } = req.headers

    if (!token) {
        throw new ApiError(401, "User Not Logged In")
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_TOKEN_SECRET)
        req.body.userId = token_decode.id
        next()

    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(401, "Invalid or Expired Token");

    }
})
export default authUser