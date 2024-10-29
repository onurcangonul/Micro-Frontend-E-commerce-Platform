const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const ordersFilePath = path.join(__dirname, "../data/orders.json");

const readOrdersFile = () => {
    try {
        const data = fs.readFileSync(ordersFilePath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading orders file:", error);
        return [];
    }
};

const writeOrdersFile = (orders) => {
    try {
        fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2), "utf-8");
    } catch (error) {
        console.error("Error writing to orders file:", error);
    }
};

router.post("/createOrder", (req, res) => {
    const { userId, items, total } = req.body;
    if (!userId || !items || !total) {
        return res.status(400).json({ message: "Eksik sipariş bilgileri" });
    }

    const formattedItems = items.map(item => ({
        name: item.name,
        price: item.price,
        thumbnail: item.thumbnail,
        quantity: item.quantity,
    }));

    const newOrder = {
        orderId: uuidv4(),
        userId,
        items: formattedItems,
        total,
        date: new Date().toISOString(),
    };

    const orders = readOrdersFile();
    orders.push(newOrder);
    writeOrdersFile(orders);

    res.status(201).json({ message: "Sipariş başarıyla oluşturuldu", order: newOrder });
});


router.get("/orderHistory/:userId", (req, res) => {
    const { userId } = req.params;

    const orders = readOrdersFile();
    const userOrders = orders.filter(order => order.userId === userId);

    if (userOrders.length === 0) {
        return res.status(404).json({ message: "Bu kullanıcı için sipariş bulunamadı" });
    }

    res.status(200).json({ orders: userOrders });
});

module.exports = router;
