import { configureStore } from '@reduxjs/toolkit';
import { cart, category, paginator, pizzas, search, sort } from './slices';

export const store = configureStore({
    reducer: {
        cart,
        category,
        paginator,
        pizzas,
        search,
        sort
    }
});
