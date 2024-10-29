import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productsReducer, categoriesReducer } from "productListing/ProductListingStore";
import { cartReducer } from "shoppingCart/ShoppingCartStore";


const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart:cartReducer

});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
