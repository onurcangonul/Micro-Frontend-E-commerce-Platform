# Micro-Frontend-E-commerce-Platform
Project Documentation
This document provides a step-by-step guide on how to start the Micro Frontend Developer
project. The project is designed with a Micro Frontend architecture, where each micro frontend
module operates independently.
Project Folder Structure
In the root directory of the project, you’ll find the following folders:
• ecommerce: Main application (to run on port 3000)
• order-history: Micro frontend for listing order history (to run on port 3004)
• product-listing: Micro frontend for listing products (to run on port 3001)
• server: Server-side application (to run on port 5000)
• shopping-cart: Micro frontend for shopping cart functionality (to run on port 3002)
• user-auth: Micro frontend for user authentication (to run on port 3003)
Steps to Start the Project
Each micro frontend and server application should be run in a separate terminal, and all packages
must be installed using npm install in each project. Follow these steps to start the project:
1. Server
o In the terminal, navigate to the server folder in the root directory:
cd server
o To start the server, run the following command:
node server.js
o Description: The server application provides the necessary APIs for user
authentication and order processing.
2. Product Listing - Micro Frontend
o Open a new terminal and navigate to the product-listing folder:
cd product-listing
o To start the application, run the following command:
npm start
o Port: 3001
3. User Auth - Micro Frontend for User Authentication
o Open a new terminal and navigate to the user-auth folder:
cd user-auth
o To start the application, run the following command:
npm start
o Port: 3003
o Description: This micro frontend handles user authentication.
4. Shopping Cart - Micro Frontend
o Open a new terminal and navigate to the shopping-cart folder:
cd shopping-cart
o To start the application, run the following command:
npm start
o Port: 3002
o Description: This micro frontend provides shopping cart functionality.
5. Order History - Micro Frontend
o Open a new terminal and navigate to the order-history folder:
cd order-history
o To start the application, run the following command:
npm start
o Port: 3004
o Description: This micro frontend displays the order history.
6. Ecommerce - Main Application
o Open a new terminal and navigate to the ecommerce folder:
cd ecommerce
o To start the application, run the following command:
npm start
o Port: 3000
o Description: The main application integrates all micro frontend components.
Notes
• Ensure that each micro frontend component runs on its assigned port.
• The main ecommerce application should be started only after all other micro frontend
components are up and running.
• If there are any errors or missing dependencies, run npm install in the relevant folder to
install missing dependencies.
