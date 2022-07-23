import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: ''
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setQuery(state, action) {
            state.value = action.payload;
        },

        resetQuery(state) {
            state.value = '';
        }
    }
});

export const searchSelector = state => state.search.value;

export const { setQuery, resetQuery } = searchSlice.actions;
export default searchSlice.reducer;
