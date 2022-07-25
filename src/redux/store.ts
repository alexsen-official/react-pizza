import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
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

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
