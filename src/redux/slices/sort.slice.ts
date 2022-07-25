import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type SortState = {
    option: SortOption;
};

const initialState: SortState = {
    option: {
        name: 'popularity (desc)',
        key: 'rating',
        order: 'desc'
    }
};

export const sortSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSort(state, action: PayloadAction<SortOption>) {
            state.option = action.payload;
        }
    }
});

export const sortSelector = (state: RootState) => state.sort.option;

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;
