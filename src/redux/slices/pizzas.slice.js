import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('pizzas/fetchItemsStatus', async params => {
    const { data } = await axios.get('https://626d16545267c14d5677d9c2.mockapi.io/items', { params });
    return data;
});

const initialState = {
    items: [],
    status: 'loading'
};

export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        }
    },
    extraReducers: {
        [fetchItems.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        },

        [fetchItems.pending]: (state) => {
            state.status = 'loading';
        },

        [fetchItems.rejected]: (state) => {
            state.status = 'error';
        }
    }
});

export const pizzasSelector = state => state.pizzas;

export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;
