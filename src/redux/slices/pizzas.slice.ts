import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export const fetchItems = createAsyncThunk('pizzas/fetchItemsStatus', async (params: SearchParams) => {
    const { data } = await axios.get<Pizza[]>('https://626d16545267c14d5677d9c2.mockapi.io/items', { params });
    return data;
});

export enum Status {
    SUCCESS = 'success',
    LOADING = 'loading',
    ERROR = 'error'
}

type PizzasState = {
    items: Pizza[];
    status: Status;
};

const initialState: PizzasState = {
    items: [],
    status: Status.LOADING
};

export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchItems.fulfilled, (state: PizzasState, action: PayloadAction<Pizza[]>) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });

        builder.addCase(fetchItems.pending, (state: PizzasState) => {
            state.status = Status.LOADING;
        });

        builder.addCase(fetchItems.rejected, (state: PizzasState) => {
            state.status = Status.ERROR;
        });
    }
});

export const pizzasSelector = (state: RootState) => state.pizzas;

export const { setItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;
