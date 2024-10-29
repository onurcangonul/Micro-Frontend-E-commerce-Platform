import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE } from "../../config/API_BASE";
import { Product } from "../../types";
import axios from "axios";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get<Product[]>(`${API_BASE}products`);
  return response.data;
});