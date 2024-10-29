const express = require("express");
const axios = require("axios");
const router = express.Router();
const DUMMYJSON_API_URL = "https://dummyjson.com/products";

router.get("/", async (req, res) => {
    try {
        const response = await axios.get(DUMMYJSON_API_URL);
        const products = response.data.products;
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error.message);
        res.status(500).json({ message: "Failed to fetch products" });
    }
});


module.exports = router;
