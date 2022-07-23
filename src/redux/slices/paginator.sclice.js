import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    page: 1
};

export const paginatorSlice = createSlice({
    name: 'paginator',
    initialState,
    reducers: {
        nextPage(state) {
            state.page++;
        },

        setPage(state, action) {
            state.page = action.payload;
        },

        prevPage(state) {
            state.page--;
        }
    }
});

export const pageSelector = state => state.paginator.page;

export const { nextPage, setPage, prevPage } = paginatorSlice.actions;
export default paginatorSlice.reducer;
