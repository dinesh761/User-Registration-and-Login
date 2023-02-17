# User-Registration-and-Login

User Registration and Login Page Creation
This project implements a user registration and login page using TypeScript, Angular, Node.js, MySQL, and Sequelize. The user interface is designed using Angular, and the server-side logic is implemented using Node.js with the help of Sequelize ORM for database access.

Features
The project includes the following features:

User registration with email verification
User login with email and password authentication
Admin login with email and password authentication
Password reset with email verification
Protected routes for authenticated users
Separate user and admin roles with appropriate access controls
Technologies
The project uses the following technologies:

Angular 12.2.0 for the frontend
Node.js 14.17.6 for the backend
TypeScript 4.3.5 for the programming language
MySQL 8.0.27 for the database
Sequelize 6.6.5 for the ORM
Installation
To install the project, follow these steps:

Clone the repository to your local machine.
Install Node.js and npm.
Install MySQL and create a new database.
Navigate to the project directory and run npm install.
Configure the database settings in config/config.json.
Run npx sequelize-cli db:migrate to create the database tables.
Run npm start to start the server.
Navigate to http://localhost:4200 to use the application.
Usage
To use the application, follow these steps:

Navigate to http://localhost:4200.
Register as a new user and verify your email address.
Log in as a user or an admin using your email and password.
Use the password reset feature if you forget your password.
Credits
This project was created by Dinesh.

License
This project is licensed under the My own License.
