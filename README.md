# 🛍️ Forever --- Full Stack eCommerce Website

Forever is a modern Full-Stack eCommerce Web Application built using
React, Node.js, Express, and MongoDB with secure authentication and
multiple payment integrations including Stripe, Razorpay, and Cash on
Delivery.

------------------------------------------------------------------------

## 🌐 Live Project Links

Frontend: https://forever-frontend-two-azure.vercel.app

Admin Panel: https://forever-admin-tau-mauve.vercel.app

------------------------------------------------------------------------

## 📌 Project Overview

Forever allows users to:

-   Register and login securely
-   Browse products
-   View product details
-   Add items to cart
-   Place orders
-   Choose payment method
-   View order history

Admin can:

-   Login securely
-   Add products
-   Remove products
-   View all customer orders
-   Update order status

------------------------------------------------------------------------

## 🚀 Features

### 👤 User Features

-   JWT Authentication
-   Product Listing Page
-   Product Detail Page
-   Cart System
-   Order Placement System
-   Order History
-   Stripe Payment Integration
-   Razorpay Payment Integration
-   Cash on Delivery (COD)

### 🛠️ Admin Features

-   Secure Admin Login
-   Add Products with Image Upload
-   Remove Products
-   View All Orders
-   Update Order Status

------------------------------------------------------------------------

## 🧑‍💻 Tech Stack

Frontend:

-   React.js
-   React Router DOM
-   Context API
-   Axios
-   Tailwind CSS

Backend:

-   Node.js
-   Express.js
-   MongoDB
-   JWT Authentication
-   Multer (Image Upload Middleware)

Payments:

-   Stripe
-   Razorpay
-   Cash on Delivery

Deployment:

-   Vercel (Frontend)
-   Vercel (Admin Panel)
-   Vercel Serverless Backend

------------------------------------------------------------------------

## 📁 Folder Structure

Forever-Ecommerce │ ├── frontend ├── admin └── backend

------------------------------------------------------------------------

## 🔗 Backend API Routes

Base URL:

/api/v1

User Routes:

POST /api/v1/user/register\
POST /api/v1/user/login\
POST /api/v1/user/admin

Product Routes:

POST /api/v1/product/add\
POST /api/v1/product/remove\
POST /api/v1/product/single\
GET /api/v1/product/list

Cart Routes:

POST /api/v1/cart/get\
POST /api/v1/cart/add\
POST /api/v1/cart/update

Order Routes (Admin):

POST /api/v1/order/list\
POST /api/v1/order/status

Order Routes (Payments):

POST /api/v1/order/place\
POST /api/v1/order/stripe\
POST /api/v1/order/razorpay

User Orders:

POST /api/v1/order/userorders

Payment Verification:

POST /api/v1/order/verifyStripe\
POST /api/v1/order/verifyRazorpay

------------------------------------------------------------------------

## 🔐 Authentication & Security

-   JWT Token Authentication
-   Protected User Routes
-   Protected Admin Routes
-   Middleware Authorization
-   Secure Password Handling
-   Image Upload Protection using Multer

------------------------------------------------------------------------

## 💳 Payment Methods Supported

Stripe\
Razorpay\
Cash on Delivery (COD)

------------------------------------------------------------------------

## 🌍 Deployment

Project deployed using Vercel

Frontend: https://forever-frontend-two-azure.vercel.app

Admin Panel: https://forever-admin-tau-mauve.vercel.app

------------------------------------------------------------------------

## 📊 Future Improvements

-   Wishlist Feature
-   Product Reviews & Ratings
-   Email Notifications
-   Coupon System
-   Order Tracking Status Updates
-   Dashboard Analytics Charts

------------------------------------------------------------------------

## 👨‍💻 Author

Rohansinh Vihol

Full‑Stack Developer\
BCA Student \| Future Software Engineer 🚀
