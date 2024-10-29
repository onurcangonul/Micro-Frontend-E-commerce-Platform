import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'
import ShoppingCart from './component/ShoppingCart';
import { Provider } from "react-redux";
import { store } from './app/store';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => (
  <Provider store={store}>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <ShoppingCart />
  </Provider>
);
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)