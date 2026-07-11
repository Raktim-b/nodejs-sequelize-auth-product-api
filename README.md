<p align="center"> <img src="https://capsule-render.vercel.app/api?type=waving&color=0:F7DF1E,50:FACC15,100:F59E0B&height=220&section=header&text=%20%26%20Product%20Management%20API&fontSize=40&fontColor=000000&animation=fadeIn&fontAlignY=38"/> </p>

> A backend REST API built with **Node.js**, **Express.js**, **MySQL**, and **Sequelize ORM** that demonstrates secure JWT Authentication, Role-Based Authorization, Product Management, Sequelize Associations, Search, Pagination, and Image Upload.

<p align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,express,mysql,javascript,vscode,git,github,postman" />
</p>

---

# 📌 Project Overview

This project is a backend REST API developed using **Node.js**, **Express.js**, and **MySQL** with **Sequelize ORM**.

The application allows users to securely register, log in, and manage products while implementing **JWT Authentication**, **Role-Based Access Control (RBAC)**, **Sequelize Associations**, **Pagination**, **Search**, and **Image Upload**.

This project demonstrates the fundamentals of building scalable backend applications using a relational database.

---

# 🎯 Project Objective

The objective of this project is to understand how modern backend applications are built using **MySQL** and **Sequelize ORM**.

The application allows:

- Secure User Authentication
- Product Management
- JWT Protected APIs
- Role-Based Authorization
- Search & Pagination
- Sequelize Relationships

---

# 🚀 Business Scenario

Imagine an online store where administrators manage products while customers can browse available products.

The system ensures that:

- Only authenticated users can access protected APIs.
- Only administrators can create, update, or delete products.
- Customers can browse product listings securely.
- Products can be searched and paginated efficiently.

---

# ✨ Features

## 🔐 Authentication Module

- User Registration
- User Login
- JWT Authentication
- Password Hashing (bcryptjs)
- Protected Routes

---

## 👤 User Module

Users can

- Register
- Login
- View Profile

---

## 📦 Product Module

Administrators can

- Create Product
- Update Product
- Delete Product
- Upload Product Image
- Update Product Stock
- Activate / Deactivate Product

Users can

- View Product List
- View Product Details

---

## 🔎 Search & Pagination

Supports

- Product Search
- Product Pagination
- Product Sorting

Examples

```
GET /api/products?keyword=laptop

GET /api/products?page=1&limit=10

GET /api/products?sort=price
```

---

## 🗑 Soft Delete

Products are soft deleted using Sequelize's `paranoid` feature.

Deleted records can be recovered without permanently removing them from the database.

---

# 🛠 Tech Stack

### Backend

- Node.js
- Express.js

### Database

- MySQL

### ORM

- Sequelize

### Authentication

- JWT
- bcryptjs

### Validation

- express-validator

### File Upload

- Multer

### API Testing

- Postman

---

# 📂 Project Structure

```text
project
│
├── src
│   │
│   ├── config
│   │   └── dbCon.js
│   │
│   ├── controller
│   │   ├── auth.controller.js
│   │   └── product.controller.js
│   │
│   ├── middleware
│   │   ├── auth.js
│   │   └── allowRoles.js
│   │
│   ├── model
│   │   ├── index.js
│   │   ├── user.model.js
│   │   └── product.model.js
│   │
│   ├── routes
│   │   ├── auth.routes.js
│   │   └── product.routes.js
│   │
│   └── utils
│       └── httpStatusCode.js
│
├── public
├── upload
├── views
│
├── .env
├── app.js
└── package.json
```

---

# 📁 Folder Explanation

## 📂 config

Contains MySQL database configuration.

---

## 📂 controller

Contains the business logic for authentication and product management.

---

## 📂 middleware

Application middleware.

Includes

- JWT Authentication
- Role-Based Authorization

---

## 📂 model

Contains Sequelize models and database associations.

---

## 📂 routes

Contains all REST API endpoints.

---

## 📂 utils

Reusable helper functions.

---

# 🗄 Database Design

## 👤 User Table

```javascript
{
    id,
    name,
    email,
    password,
    role,
    createdAt,
    updatedAt
}
```

---

## 📦 Product Table

```javascript
{
    id,
    name,
    description,
    price,
    stock,
    image,
    status,
    createdAt,
    updatedAt
}
```

---

# 🔗 Sequelize Association

One User can create multiple products.

```javascript
User.hasMany(Product);

Product.belongsTo(User);
```

---

# 🔐 Authentication Flow

```text
Register
      │
      ▼
Hash Password
      │
      ▼
Store User
      │
      ▼
Login
      │
      ▼
Generate JWT
      │
      ▼
Protected APIs
```

---

# 👥 User Roles

## 👑 Admin

- Create Product
- Update Product
- Delete Product
- Update Stock

---

## 👤 User

- View Products
- View Product Details

---

# 🌐 API Modules

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |
| GET | `/api/auth/profile` | User Profile |

---

## Products

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/products` | Create Product |
| GET | `/api/products` | Get All Products |
| GET | `/api/products/:id` | Get Product |
| PUT | `/api/products/:id` | Update Product |
| DELETE | `/api/products/:id` | Delete Product |
| PATCH | `/api/products/:id/stock` | Update Stock |

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing
- Protected APIs
- Role-Based Authorization
- Environment Variables
- Input Validation

---

# 📈 Skills Demonstrated

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT Authentication
- Role-Based Access Control
- REST API Development
- CRUD Operations
- Sequelize Associations
- Pagination
- Search
- Soft Delete
- MVC Architecture

---

# 🎓 Learning Outcomes

Building this project helped me understand

- Sequelize ORM
- MySQL Relationships
- JWT Authentication
- Middleware
- REST API Design
- Express.js
- CRUD Operations
- Search & Pagination
- Role-Based Authorization

---

# 🚀 Future Improvements

- Refresh Token Authentication
- Email Verification
- Cloudinary Image Upload
- Swagger Documentation
- Redis Caching
- Unit Testing
- Docker Deployment
- CI/CD Pipeline

---

# ▶ Installation

Clone the repository

```bash
git clone https://github.com/your-username/nodejs-sequelize-auth-product-api.git
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=your_password

DB_NAME=product_db

JWT_SECRET=your_jwt_secret
```

Run the server

```bash
npm run dev
```

---

# 💼 Skills for Resume

This project demonstrates practical experience with

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT Authentication
- REST APIs
- CRUD Operations
- Role-Based Authorization
- Pagination
- Search
- MVC Architecture

---

# 👨‍💻 Author

## Raktim Bhattacharya

**Backend Developer**

### 💻 Tech Stack

Node.js • Express.js • MySQL • Sequelize • JavaScript • REST APIs

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ **Star** on GitHub.
