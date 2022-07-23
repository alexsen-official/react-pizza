import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        name: 'popularity (desc)',
        key: 'rating',
        order: 'desc'
    }
};

export const sortSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSort(state, action) {
            state.value = action.payload;
        }
    }
});

export const sortSelector = state => state.sort.value;

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;
