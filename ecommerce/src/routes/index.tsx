import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import UserAuth from "userAuth/UserAuth";
import Layout from "../layout";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";

const ProductList = React.lazy(() => import("productListing/ProductListing"));
const CartPage = React.lazy(() => import("shoppingCart/ShoppingCart"));
const OrdersPage = React.lazy(() => import("orderHistory/OrderHistory"));

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<UserAuth />} />
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <Layout>
            <Home />
          </Layout>
        </ProtectedRoute>
      }
    />
    <Route
      path="/products"
      element={
        <ProtectedRoute>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <ProductList />
            </Layout>
          </Suspense>
        </ProtectedRoute>
      }
    />
    <Route
      path="/cart"
      element={
        <ProtectedRoute>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <CartPage />
            </Layout>
          </Suspense>
        </ProtectedRoute>
      }
    />
    <Route
      path="/orders"
      element={
        <ProtectedRoute>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <OrdersPage />
            </Layout>
          </Suspense>
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default AppRoutes;
