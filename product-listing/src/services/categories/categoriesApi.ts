import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE } from "../../config/API_BASE";
import { Categories } from "../../types";
import axios from "axios";

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await axios.get<Categories[]>(`${API_BASE}categories`);
  return response.data;
});

