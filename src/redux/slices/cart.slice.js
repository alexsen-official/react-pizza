import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalCount: 0,
    totalPrice: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
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

        removeItem(state, action) {
            const findItem = state.items.find(i => i.id === action.payload.id);

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

        clearItem(state, action) {
            const findItem = state.items.find(i => i.id === action.payload.id);

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

export const cartSelector = state => state.cart;
export const cartItemSelector = id => state => state.cart.items.find(i => i.id === id);

export const { addItem, removeItem, clearItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
