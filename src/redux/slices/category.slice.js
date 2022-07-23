import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        id: 0,
        name: 'All'
    }
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory(state, action) {
            state.value = action.payload;
        }
    }
});

export const categorySelector = state => state.category.value;

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
