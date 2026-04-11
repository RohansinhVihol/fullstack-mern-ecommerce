import { Order } from "../models/order.model.js"
import { User } from "../models/user.model.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import Stripe from 'stripe'
import razorpay from 'razorpay'

//Global Variables
const currency = 'inr'
const deliveryCharge = 10

//gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
})

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

    const { userId, items, amount, address } = req.body;
    const origin = req.headers.origin || "http://localhost:5173";

    const orderData = {
        userId,
        items,
        amount,
        address,
        paymentMethod: "Stripe",
        payment: false,
        date: Date.now()
    };

    const newOrder = await Order.create(orderData);

    const line_items = items.map((item) => ({
        price_data: {
            currency: currency,
            product_data: {
                name: item.name
            },
            unit_amount: item.price * 100
        },
        quantity: item.quantity
    }))

    line_items.push({
        price_data: {
            currency: currency,
            product_data: {
                name: "Delivery Charges"
            },
            unit_amount: deliveryCharge * 100
        },
        quantity: 1
    })

    const session = await stripe.checkout.sessions.create({
        success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
        line_items,
        mode: 'payment',
    })

    res
        .status(200)
        .json(
            new ApiResponse(200, session.url, "Stripe Payment")
        )

})

//Verify Stripe
const verifyStripe = async (req, res) => {

    const { orderId, success, userId } = req.body

    if (success == "true") {
        await Order.findByIdAndUpdate(orderId, { payment: true })
        await User.findByIdAndUpdate(userId, { cartData: {} }),
            res
                .status(200)
                .json(
                    new ApiResponse(200, {}, "Stripe Payment Successfully done")
                )
    }
    else {
        await Order.findByIdAndDelete(orderId)
        throw new ApiError(400, "Payment failed")
    }

}

//Placing orders using Razorpay Method
const placeOrderRazorpay = asyncHandler(async (req, res) => {

    const { userId, items, amount, address } = req.body;

    const orderData = {
        userId,
        items,
        amount,
        address,
        paymentMethod: "Razorpay",
        payment: false,
        date: Date.now()
    };

    const newOrder = await Order.create(orderData);

    const options = {
        amount: amount * 100,
        currency: currency.toUpperCase(),
        receipt: newOrder._id.toString(),
    }

    await razorpayInstance.orders.create(options, (error, order) => {
        if (error) {
            console.log(error);
            throw new ApiError(500, "payment failed")
        }
        res
            .status(200)
            .json(
                new ApiResponse(200, order, "Payment Successfully done")
            )
    })

})

const verifyRazorpay = asyncHandler(async (req, res) => {
    const { userId, razorpay_order_id } = req.body
    

    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)

    if(orderInfo.status == 'paid'){
        await Order.findByIdAndUpdate(orderInfo.receipt,{payment:true})
        await User.findByIdAndUpdate(userId,{cartData:{}})

        res
        .status(200)
        .json(
            new ApiResponse(200,{},"Payment Successfully")
        )
    }
    else{
        throw new ApiResponse(500,"Payment Failed")
    }
    
})

//All Orders data for Admin Panel
const allOrders = asyncHandler(async (req, res) => {

    const orders = await Order.find({})

    res
        .status(200)
        .json(
            new ApiResponse(200, orders, "All Orderes Fetched Successfully")
        )

})

//User Order Data for Frontend
const userOrders = asyncHandler(async (req, res) => {

    const { userId } = req.body

    const orders = await Order.find({ userId })

    res
        .status(200)
        .json(
            new ApiResponse(200, orders, "User Orders Fetched successfully")
        )

})

//update order status for Admin Panel
const updateStatus = asyncHandler(async (req, res) => {

    const { orderId, status } = req.body

    await Order.findByIdAndUpdate(orderId, { status })

    res
        .status(200)
        .json(
            new ApiResponse(200, {}, "Status Updated")
        )

})

export {
    placeOrder,
    placeOrderStripe,
    placeOrderRazorpay,
    allOrders,
    userOrders,
    updateStatus,
    verifyStripe,
    verifyRazorpay
}