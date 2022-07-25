import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type CartState = {
    items: CartItem[];
    totalCount: number;
    totalPrice: number;
};

const initialState: CartState = {
    items: [],
    totalCount: 0,
    totalPrice: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const findItem = state.items.find(i => i.id === action.payload.id);

            if (findItem) {
                findItem.count++;
                state.totalPrice += findItem.price;
            }
            else {
                state.items.push({
                    ...action.payload,
                    count: 1
                });

                state.totalPrice += action.payload.price;
            }

            state.totalCount++;
        },

        removeItem(state, action: PayloadAction<number>) {
            const findItem = state.items.find(i => i.id === action.payload);

            if (findItem) {
                if (findItem.count > 1) {
                    findItem.count--;
                }
                else {
                    state.items = state.items.filter(i => i.id !== findItem.id);
                }

                state.totalPrice -= findItem.price;
                state.totalCount--;
            }
        },

        clearItem(state, action: PayloadAction<number>) {
            const findItem = state.items.find(i => i.id === action.payload);

            if (findItem) {
                state.items = state.items.filter(i => i.id !== findItem.id);
                state.totalPrice -= findItem.price * findItem.count;
                state.totalCount -= findItem.count;
            }
        },

        clearCart(state) {
            state.items = [];
            state.totalCount = 0;
            state.totalPrice = 0;
        }
    }
});

export const cartSelector = (state: RootState) => state.cart;
export const cartItemSelector = (id: number) => (state: RootState) => state.cart.items.find(i => i.id === id);

export const { addItem, removeItem, clearItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
