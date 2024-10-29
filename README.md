<p class="has-line-data" data-line-start="0" data-line-end="15">Project Documentation<br>
This document provides a step-by-step guide on how to start the Micro Frontend Developer<br>
project. The project is designed with a Micro Frontend architecture, where each micro frontend<br>
module operates independently.<br>
Project Folder Structure<br>
In the root directory of the project, you’ll find the following folders:<br>
• ecommerce: Main application (to run on port 3000)<br>
• order-history: Micro frontend for listing order history (to run on port 3004)<br>
• product-listing: Micro frontend for listing products (to run on port 3001)<br>
• server: Server-side application (to run on port 5000)<br>
• shopping-cart: Micro frontend for shopping cart functionality (to run on port 3002)<br>
• user-auth: Micro frontend for user authentication (to run on port 3003)<br>
Steps to Start the Project<br>
Each micro frontend and server application should be run in a separate terminal, and all packages<br>
must be installed using npm install in each project. Follow these steps to start the project:</p>
<ol>
<li class="has-line-data" data-line-start="15" data-line-end="22">Server<br>
o In the terminal, navigate to the server folder in the root directory:<br>
cd server<br>
o To start the server, run the following command:<br>
node server.js<br>
o Description: The server application provides the necessary APIs for user<br>
authentication and order processing.</li>
<li class="has-line-data" data-line-start="22" data-line-end="28">Product Listing - Micro Frontend<br>
o Open a new terminal and navigate to the product-listing folder:<br>
cd product-listing<br>
o To start the application, run the following command:<br>
npm start<br>
o Port: 3001</li>
<li class="has-line-data" data-line-start="28" data-line-end="35">User Auth - Micro Frontend for User Authentication<br>
o Open a new terminal and navigate to the user-auth folder:<br>
cd user-auth<br>
o To start the application, run the following command:<br>
npm start<br>
o Port: 3003<br>
o Description: This micro frontend handles user authentication.</li>
<li class="has-line-data" data-line-start="35" data-line-end="42">Shopping Cart - Micro Frontend<br>
o Open a new terminal and navigate to the shopping-cart folder:<br>
cd shopping-cart<br>
o To start the application, run the following command:<br>
npm start<br>
o Port: 3002<br>
o Description: This micro frontend provides shopping cart functionality.</li>
<li class="has-line-data" data-line-start="42" data-line-end="49">Order History - Micro Frontend<br>
o Open a new terminal and navigate to the order-history folder:<br>
cd order-history<br>
o To start the application, run the following command:<br>
npm start<br>
o Port: 3004<br>
o Description: This micro frontend displays the order history.</li>
<li class="has-line-data" data-line-start="49" data-line-end="62">Ecommerce - Main Application<br>
o Open a new terminal and navigate to the ecommerce folder:<br>
cd ecommerce<br>
o To start the application, run the following command:<br>
npm start<br>
o Port: 3000<br>
o Description: The main application integrates all micro frontend components.<br>
Notes<br>
• Ensure that each micro frontend component runs on its assigned port.<br>
• The main ecommerce application should be started only after all other micro frontend<br>
components are up and running.<br>
• If there are any errors or missing dependencies, run npm install in the relevant folder to<br>
install missing dependencies.</li>
</ol>
