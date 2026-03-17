# UTK Deploy

A basic Node.js application built with Express and MongoDB for managing todos and ecommerce data.

## 📋 Project Overview

**UTK Deploy** is a Node.js web application designed to serve as a foundation for deployment. It provides RESTful endpoints and data models for managing:
- **Todo Management**: Create and track todos with subtasks
- **Ecommerce Platform**: Manage products, categories, and users

**Version**: 1.0.0  
**Author**: Utkarsh Tiwari  
**License**: ISC

---

## 🛠️ Tech Stack

### Core Framework
- **Express.js** (^5.2.1) - Web server framework for Node.js
- **Mongoose** (^9.3.0) - MongoDB object modeling

### Environment & Configuration
- **dotenv** (^17.3.1) - Environment variable management
- **Node.js** - JavaScript runtime

### Module System
- **CommonJS** - Module type for this project

---

## 📂 Project Structure

```
utk_deploy/
├── index.js                          # Main application entry point
├── package.json                      # Project metadata and dependencies
├── .env                              # Environment variables (not tracked)
├── .gitignore                        # Git ignore rules
├── package-lock.json                 # Dependency lock file
├── models/                           # Database schemas
│   └── todos/                        # Todo-related models
│       ├── todo.models.js            # Todo schema definition
│       ├── sub_todo.models.js        # Subtodo schema definition
│       ├── user.models.js            # User schema (todos context)
│       └── ecommerce/                # Ecommerce models
│           ├── product.models.js     # Product schema definition
│           ├── category.models.js    # Product category schema
│           └── user.models.js        # User schema (ecommerce context)
└── node_modules/                     # Installed dependencies
```

### Key Directories

#### `/models`
Contains all Mongoose schema definitions organized by feature domain. Each model file defines the structure and validation rules for database collections.

- **todos/** - Todo management schemas
- **todos/ecommerce/** - Ecommerce platform schemas

---

## 🗄️ Database Models

### Todo Models (`models/todos/`)

#### Todo Schema (`todo.models.js`)
Manages individual todo items with the following structure:
- `content` (String, required) - The todo task description
- `complete` (Boolean, default: false) - Completion status
- `createdBy` (ObjectId, ref: User) - User who created the todo
- `subTodos` (Array of ObjectIds, ref: Sub_Todo) - Linked subtasks

#### Sub-Todo Schema (`sub_todo.models.js`)
Represents subtasks within a todo item

#### User Schema (`user.models.js`)
Manages user accounts and authentication in the todo context

### Ecommerce Models (`models/todos/ecommerce/`)

#### Product Schema (`product.models.js`)
Defines product details:
- `name` (String, unique, required) - Product name
- `description` (String, required) - Product details
- `price` (Number, default: 0) - Product cost
- `stock` (Number) - Inventory quantity
- `productimage` (String) - Image URL or path

#### Category Schema (`category.models.js`)
Organizes products into categories

#### User Schema (`user.models.js`)
Manages user accounts and authentication in the ecommerce context

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn package manager
- MongoDB instance (local or cloud-based)

### Installation

1. **Clone or download the project**
   ```bash
   cd utk_deploy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   PORT=7456
   MONGODB_URI=your_mongodb_connection_string
   NODE_ENV=development
   ```

### Running the Application

Start the server with:
```bash
npm start
```

The application will listen on the port specified in `PORT` environment variable (default in code: 7456).

---

## 🔌 API Endpoints

### Available Routes

#### Home Route
- **GET** `/` - Returns "Hello World!"

#### Social/Profile Route
- **GET** `/facebook` - Returns "utkdotcom"

#### Authentication
- **GET** `/login` - Returns HTML login page with message "Please login at WWW.utkdotcom......"

> **Note**: These are basic demonstration routes. Additional routes for todo and ecommerce operations should be implemented as per requirements.

---

## 📝 Current Configuration

- **Entry Point**: `index.js`
- **Module Type**: CommonJS
- **Server Port**: 7456 (configurable via PORT environment variable)
- **Environment Support**: dotenv configured for environment variable management

---

## 🔒 Environment Variables

The application uses the `dotenv` package to load environment variables from a `.env` file:
- `PORT` - Server port (defaults to 7456 in code)
- `MONGODB_URI` - MongoDB connection string (recommended)
- `NODE_ENV` - Application environment (development/production)

Ensure your `.env` file is added to `.gitignore` and never committed to version control.

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^5.2.1 | Web server framework |
| mongoose | ^9.3.0 | MongoDB object modeling |
| dotenv | ^17.3.1 | Environment variable management |

---

## 🚧 Development Notes

- The project uses ES6 import syntax in model files but CommonJS in the main application
- Consider standardizing module syntax across the project
- Models are defined but routes to interact with them are not yet implemented
- User authentication logic needs to be developed
- CORS configuration may be needed if serving frontend applications

---

## 📋 Recommended Next Steps

1. **Implement Model Routes** - Create REST endpoints for CRUD operations on todos and products
2. **Database Connection** - Establish MongoDB connection in index.js
3. **Authentication** - Implement user authentication and authorization
4. **Validation** - Add input validation middleware
5. **Error Handling** - Implement global error handling middleware
6. **Testing** - Add unit and integration tests
7. **Module Consistency** - Standardize between ES6 modules and CommonJS

---

## 📄 License

This project is licensed under the ISC License.

---

## 👤 Author

**Utkarsh Tiwari**

For more information or contributions, feel free to reach out.

---

*Generated: March 2026*
