import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const OrderHistory: React.FC = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchOrderHistory = async () => {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const userId = user?.id;

      if (!userId) {
        console.error("User ID not found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/api/orders/orderHistory/${userId}`
        );
        setOrders(response.data.orders);
      } catch (error) {
        console.error("Error fetching order history:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, []);

  const columns = [
    {
      name: "Thumbnail",
      cell: (row: any) => (
        <img
          src={row.items[0].thumbnail}
          alt={row.items[0].name}
          className="w-12 h-12 object-cover rounded-md"
        />
      ),
      width: "80px",
    },
    {
      name: "Order ID",
      selector: (row: any) => row.orderId,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row: any) => new Date(row.date).toLocaleDateString(),
      sortable: true,
    },
    {
      name: "Total",
      selector: (row: any) => `${row.total.toFixed(2)} £`,
      sortable: true,
    },
    {
      name: "Items",
      cell: (row: any) => (
        <ul>
          {row.items.map((item: any, index: number) => (
            <li key={index}>
              {item.name} x{item.quantity} - {item.price} £
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Orders</h1>
      <div className="w-full max-w-4xl">
        <DataTable
          columns={columns}
          data={orders}
          progressPending={loading}
          pagination
          highlightOnHover
          striped
        />
      </div>
    </div>
  );
};

export default OrderHistory;
