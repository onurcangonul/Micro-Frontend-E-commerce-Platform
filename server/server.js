require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: [/^http:\/\/localhost:\d+$/]
}));

app.use(bodyParser.json());

const authRoutes = require("./routes/auth");
const productsRoutes = require("./routes/products");
const categoriesRoutes = require("./routes/categories");

const ordersRoutes = require("./routes/orders"); 
app.use("/api/auth", authRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/orders", ordersRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
