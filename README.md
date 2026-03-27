# Student Management System (MVC)

A full-stack Student Management System built using Node.js, Express, MongoDB, and EJS following the Model-View-Controller (MVC) architecture.

## Overview

This application allows users to perform basic CRUD operations on student records.  
It is structured using MVC architecture to maintain separation of concerns and improve scalability and maintainability.


## Features

- Create a new student
- View all students
- Update student details
- Delete a student
- Server-side validation using express-validator
- RESTful routing
- Bootstrap-based responsive UI
- MongoDB Atlas cloud database
- Deployed on Vercel

## Technology Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- EJS
- Bootstrap
- express-validator
- method-override
- Vercel


## Installation

1. Clone the repository

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. Install dependencies

```
npm install
```

3. Create a .env file in the root directory

```
PORT=3000
MONGO_URI=your_mongodb_atlas_connection_string
```

4. Run the application

```
npm run dev
```

Open in browser:

http://localhost:3000


## RESTful Routes

GET     /               Display all students  
GET     /add            Show add student form  
POST    /add            Create new student  
GET     /edit/:id       Show edit form  
PUT     /edit/:id       Update student  
DELETE  /delete/:id     Delete student  

![alt text](image.png)

## Environment Variables

Database credentials are stored using environment variables for security and flexibility.  
The database URI is not hardcoded inside the source code.


## Learning Outcomes

- Understanding MVC architecture
- Implementing RESTful routing
- Middleware usage in Express
- Server-side validation
- MongoDB integration
- Cloud deployment using Vercel