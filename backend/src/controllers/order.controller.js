import { Order } from "../models/order.model.js"
import { User } from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

//Placing orders using COD Method
const placeOrder = asyncHandler(async (req, res) => {

    const { userId, items, amount, address } = req.body;

    if (!userId || !items || !amount || !address) {
        throw new ApiError(400, "All fields are required");
    }

    if (!Array.isArray(items) || items.length === 0) {
        throw new ApiError(400, "Order items must be a non-empty array");
    }

    if (amount <= 0) {
        throw new ApiError(400, "Invalid order amount");
    }

    if (typeof address !== "object") {
        throw new ApiError(400, "Invalid address format");
    }

    const orderData = {
        userId,
        items,
        amount,
        address,
        paymentMethod: "COD",
        payment: false,
        date: Date.now()
    };

    const newOrder = await Order.create(orderData);

    if (!newOrder) {
        throw new ApiError(500, "Failed to place order");
    }

    // 8️⃣ Clear cart after order placed
    await User.findByIdAndUpdate(userId, {
        cartData: {}
    });

    // 9️⃣ Send success response
    res.status(201).json(
        new ApiResponse(
            201,
            newOrder,
            "Order placed successfully"
        )
    );

});

//Placing orders using Stripe Method
const placeOrderStripe = asyncHandler(async (req, res) => {

})

//Placing orders using Razorpay Method
const placeOrderRazorpay = asyncHandler(async (req, res) => {

})

//All Orders data for Admin Panel
const allOrders = asyncHandler(async (req, res) => {

})

//User Order Data for Frontend
const userOrders = asyncHandler(async (req, res) => {

})

//update order status for Admin Panel
const updateStatus = asyncHandler(async (req, res) => {

})

export{
    placeOrder,
    placeOrderStripe,
    placeOrderRazorpay,
    allOrders,
    userOrders,
    updateStatus
}