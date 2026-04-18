# 🛍️ Forever --- Full Stack eCommerce Website

Forever is a modern Full-Stack eCommerce Web Application built using
React, Node.js, Express, and MongoDB with secure authentication and
multiple payment integrations including Stripe, Razorpay, and Cash on
Delivery.

------------------------------------------------------------------------

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white)
![Razorpay](https://img.shields.io/badge/Razorpay-0C2451?style=for-the-badge&logo=razorpay&logoColor=white)

Production-ready MERN eCommerce platform featuring JWT authentication, role-based admin dashboard, product management system, and Stripe + Razorpay payment gateway integration deployed on Vercel serverless infrastructure.

------------------------------------------------------------------------

## 🌐 Live Project Links

🚀 Frontend (User Panel)  
https://forever-frontend-two-azure.vercel.app

🛠 Admin Dashboard  
https://forever-admin-tau-mauve.vercel.app

⚙️ Backend REST API  
https://forever-backend-psi-nine.vercel.app

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

### 🔐 Security Features

- JWT authentication
- Role-based admin authorization
- Protected API routes
- Secure image upload validation
- Payment verification middleware

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

```
Forever-Ecommerce/
│
├── frontend/
├── admin/
└── backend/
```

## 🧱 Application Architecture

Client (Frontend / Admin)\
        ↓\
REST API (Express Serverless Backend)\
        ↓\
Authentication Middleware (JWT)\
        ↓\
Controllers\
        ↓\
MongoDB Database\
        ↓\
Cloudinary (Image Storage)\
        ↓\
Stripe / Razorpay (Payments)

------------------------------------------------------------------------

## 🔗 Backend API Routes

Base URL:

/api/v1

### Backend root endpoint:

GET /
Returns: "Forever eCommerce API is running..."

### User Routes

POST /api/v1/user/register\
POST /api/v1/user/login\
POST /api/v1/user/admin

### Product Routes

POST /api/v1/product/add\
POST /api/v1/product/remove\
POST /api/v1/product/single\
GET /api/v1/product/list

### Cart Routes

POST /api/v1/cart/get\
POST /api/v1/cart/add\
POST /api/v1/cart/update

### Order Routes (Admin)

POST /api/v1/order/list\
POST /api/v1/order/status

### Payment Routes

POST /api/v1/order/place\
POST /api/v1/order/stripe\
POST /api/v1/order/razorpay

### User Orders

POST /api/v1/order/userorders

### Payment Verification

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

## 🔐 Environment Variables

### 🖥 Server Configuration
- PORT=****
- MONGODB_URI=****
- JWT_TOKEN_SECRET=****
- JWT_TOKEN_EXPIRE=****

### ☁️ Cloudinary Configuration
- CLOUDINARY_SECRET_KEY=****
- CLOUDINARY_NAME=****

### 👨‍💼 Admin Authentication
- ADMIN_EMAIL=****
- ADMIN_PASSWORD=****
- ADMIN_JWT_SECRET=****

### 💳 Payment Gateway Configuration
- STRIPE_SECRET_KEY=****
- RAZORPAY_KEY_ID=****
- RAZORPAY_KEY_SECRET=****

------------------------------------------------------------------------
## ▶️ Run Project Locally

### Clone Repository

```bash
git clone https://github.com/RohansinhVihol/fullstack-mern-ecommerce
cd fullstack-mern-ecommerce
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend (User Panel)

```bash
cd frontend
npm install
npm run dev
```

### Admin Panel

```bash
cd admin
npm install
npm run dev
```

## 💳 Payment Methods Supported

Stripe\
Razorpay\
Cash on Delivery (COD)

------------------------------------------------------------------------

## 📈 Project Highlights

✔ Full-stack MERN eCommerce platform  
✔ Role-based Admin Dashboard  
✔ Stripe + Razorpay payment gateway integration  
✔ JWT-based authentication & authorization  
✔ Secure image upload using Cloudinary + Multer  
✔ Serverless backend deployment on Vercel

## 🏗 Architecture Highlights

- RESTful API architecture with versioning (/api/v1)
- MVC-based backend structure
- Middleware-based authentication & authorization
- MongoDB schema-based data modeling using Mongoose
- Cloudinary integration for image storage
- Payment verification workflow for Stripe & Razorpay
- Separate frontend and admin panel applications

------------------------------------------------------------------------

## 🌍 Deployment

Project deployed on **Vercel Serverless Infrastructure**

Frontend: https://forever-frontend-two-azure.vercel.app

Admin Panel: https://forever-admin-tau-mauve.vercel.app

Backend API: https://forever-backend-psi-nine.vercel.app

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

**Rohansinh Vihol**

Full-Stack Developer  
BCA Student | Future Software Engineer 🚀

🔗 GitHub: https://github.com/RohansinhVihol  
🔗 LinkedIn: www.linkedin.com/in/rohansinhvihol
