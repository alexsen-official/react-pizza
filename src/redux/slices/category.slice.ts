import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type categoryState = {
    category: Category
};

const initialState: categoryState = {
    category: {
        id: 0,
        name: 'All'
    }
};

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<Category>) {
            state.category = action.payload;
        }
    }
});

export const categorySelector = (state: RootState) => state.category.category;

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
