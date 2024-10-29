// routes/categories.js
const express = require("express");
const axios = require("axios");
const router = express.Router();

const CATEGORIES_URL = "https://dummyjson.com/products/categories";

const CATEGORY_PRODUCTS_URL = "https://dummyjson.com/products/category";

router.get("/", async (req, res) => {
    try {
        const response = await axios.get(CATEGORIES_URL);
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching category list:", error.message);
        res.status(500).json({ message: "Failed to fetch category list" });
    }
});

router.get("/:category", async (req, res) => { 
    const { category } = req.params;
    try {
        const response = await axios.get(`${CATEGORY_PRODUCTS_URL}/${category}`);
        res.json(response.data);
    } catch (error) {
        console.error(`Error fetching products for category ${category}:`, error.message);
        res.status(500).json({ message: `Failed to fetch products for category ${category}` });
    }
});

module.exports = router;
