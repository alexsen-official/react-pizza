import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
    value: ''
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setQuery(state, action: PayloadAction<string>) {
            state.value = action.payload;
        },

        resetQuery(state) {
            state.value = '';
        }
    }
});

export const searchSelector = (state: RootState) => state.search.value;

export const { setQuery, resetQuery } = searchSlice.actions;
export default searchSlice.reducer;
