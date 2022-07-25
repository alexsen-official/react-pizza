import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

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

        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },

        prevPage(state) {
            state.page--;
        }
    }
});

export const pageSelector = (state: RootState) => state.paginator.page;

export const { nextPage, setPage, prevPage } = paginatorSlice.actions;
export default paginatorSlice.reducer;
