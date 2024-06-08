# Login & Registration Form with MERN stack

## Introduction

Responsive user Registration and Login (SignIn & SignUp) Form functionality using React, NodeJS, ExpressJS, MongoDB, and Bootstrap.

# Github link to my account to download the files from:

https://github.com/sauddahmed/MERN-stack-assignment.git

## Requirements

Before going forward you must have **Node js** installed on your machine.  
Go to the link below for installation if you don't have installed yet.

- [Node js](https://nodejs.org/en/download)

You also need **MongoDB** installed on your machine.  
Go to the link below for installation instructions if you haven't installed it yet.

- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation & Getting Started

1. Download the repository

2. Unzip the folder and open it with [VS Code](https://code.visualstudio.com/)

### Frontend

1. Open terminal & go to `cd frontend`

2. Install dependencies by running `npm install` command

3. Run the command `npm run dev` to start the live server

4. Click on `http://localhost:5173/`

### Backend

1. Open terminal & go to `cd backend`

2. Install dependencies by running `npm install` command

3. Ensure MongoDB is running:
   - Open MongoDB Compass or run `mongod` in your terminal to start the MongoDB server.

4. Run the command `npm start` or `nodemon index.js` to start the live server on the database

- Congratulations 🎉 you have set up the environment successfully

## MongoDB Setup Instructions

1. Download MongoDB from [MongoDB Community Download](https://www.mongodb.com/try/download/community)

2. Follow the installation instructions for your operating system:
   - **Windows**: Follow the steps in the [Windows installation guide](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
   - **macOS**: Follow the steps in the [macOS installation guide](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
   - **Linux**: Follow the steps in the [Linux installation guide](https://docs.mongodb.com/manual/administration/install-on-linux/)

3. Once installed, start the MongoDB server:
   - **Using Command Line**: Run `mongod` in your terminal
   - **Using MongoDB Compass**: Open MongoDB Compass and connect to the server

4. Ensure your backend code is configured to connect to the MongoDB server. Update the connection string in your `backend/config/database.js` file if necessary.

## 🛠️ Technology Used

This project uses the following technologies:

- [React](https://reactjs.org) and [React Router](https://reacttraining.com/react-router/) for the frontend
- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend
- [MongoDB](https://www.mongodb.com/) for the database
- [Bootstrap](https://getbootstrap.com/) for styling