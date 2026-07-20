# 📦 Inventory Management API

A production-ready RESTful API for inventory management built with **Node.js**, **Express**, **Prisma ORM**, and **PostgreSQL**.

This project follows a layered architecture and includes authentication, authorization, inventory tracking, automatic stock updates, dashboard analytics, Swagger documentation, and cloud deployment.

---

## 🚀 Live Demo

**API Base URL**

https://inventory-management-api-kuwc.onrender.com

**Swagger Documentation**

https://inventory-management-api-kuwc.onrender.com/api-docs

**GitHub Repository**

https://github.com/GHOSTEV05/inventory-management-api

---

# ✨ Features

- JWT Authentication
- Role-based Authorization (ADMIN / EMPLOYEE)
- User Management
- Category Management
- Product Management
- Inventory Movement Management
- Automatic Stock Updates
- Dashboard Metrics
- Input Validation using Zod
- Password Hashing with bcrypt
- Prisma ORM
- PostgreSQL Database
- Swagger/OpenAPI Documentation
- Cloud Deployment (Render + Neon)

---

# 🛠️ Tech Stack

## Backend

- Node.js
- Express.js

## Database

- PostgreSQL
- Prisma ORM

## Authentication

- JWT
- bcrypt

## Validation

- Zod

## Documentation

- Swagger UI
- swagger-jsdoc

## Deployment

- Render
- Neon PostgreSQL

---

# 📂 Project Structure

```
src
│
├── config
│
├── controllers
│
├── docs
│
├── middlewares
│
├── repositories
│
├── routes
│
├── services
│
├── utils
│
├── validators
│
├── app.js
└── server.js

prisma
│
├── migrations
├── schema.prisma
└── seed.js
```

---

# 🏗️ Architecture

The project follows a layered architecture:

```
Client
   │
   ▼
Routes
   │
   ▼
Controllers
   │
   ▼
Services
   │
   ▼
Repositories
   │
   ▼
PostgreSQL
```

Each layer has a single responsibility, making the project easier to maintain and scale.

---

# 📡 API Modules

## Authentication

- Register User
- Login

---

## Users

- User Management

---

## Categories

- Create Category
- Get Categories
- Update Category
- Delete Category

---

## Products

- Create Product
- Get Products
- Get Product By Id
- Update Product

---

## Inventory Movements

- Register Inventory Movement
- Get Inventory Movements
- Get Movement By Id

---

## Dashboard

Provides:

- Total Products
- Total Categories
- Total Users
- Low Stock Products
- Inventory Value
- Recent Inventory Movements

---

# 🔐 Authentication

Protected endpoints require a JWT token.

Example:

```
Authorization: Bearer YOUR_TOKEN
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory.

```env
PORT=3000

DATABASE_URL=your_database_url

JWT_SECRET=your_secret_key

JWT_EXPIRES_IN=7d
```

---

# 🗄️ Database

The project uses PostgreSQL with Prisma ORM.

Generate Prisma Client

```bash
npx prisma generate
```

Run migrations

```bash
npx prisma migrate deploy
```

Seed database

```bash
npm run seed
```

---

# 💻 Installation

Clone the repository

```bash
git clone https://github.com/GHOSTEV05/inventory-management-api.git
```

Enter the project

```bash
cd inventory-management-api
```

Install dependencies

```bash
npm install
```

Configure environment variables

```bash
cp .env.example .env
```

Generate Prisma Client

```bash
npx prisma generate
```

Run migrations

```bash
npx prisma migrate deploy
```

Seed database

```bash
npm run seed
```

Start development server

```bash
npm run dev
```

---

# 📖 Swagger Documentation

Interactive API documentation is available at:

```
https://inventory-management-api-kuwc.onrender.com/api-docs
```

---

# 📜 Available Scripts

Install dependencies

```bash
npm install
```

Development

```bash
npm run dev
```

Production

```bash
npm start
```

Database Seed

```bash
npm run seed
```

Generate Prisma Client

```bash
npx prisma generate
```

Deploy Migrations

```bash
npx prisma migrate deploy
```

---

# 📷 Screenshots

You can add screenshots here later.

Example:

```
docs/images/swagger.png

docs/images/dashboard.png
```

---

# 🚀 Future Improvements

- Pagination
- Filtering
- Search
- Product Image Upload
- Unit Tests
- Docker Support
- CI/CD Pipeline
- Refresh Tokens

---

# 👨‍💻 Author

**Santiago Escobar**

GitHub

https://github.com/GHOSTEV05

---

# ⭐ If you found this project useful

Give it a ⭐ on GitHub!