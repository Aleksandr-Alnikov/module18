import {History} from "../components/types/types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";



type HistoryState = {
    history: History[] | null;
    isLoading: boolean;
    isError: boolean;
};

const initialState: HistoryState = {
    history: null,
    isLoading: false,
    isError: false,
};


export const fetchHistory = createAsyncThunk('history/fetchHistory', async () => {
    const res = await  fetch('https://jellybellywikiapi.onrender.com/api/mileStones');
    const data = await res.json();

    return data.items;
});


const factsSlice = createSlice({
    name: 'history',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHistory.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchHistory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.history = action.payload;
            })
            .addCase(fetchHistory.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    }
});


export default factsSlice.reducer;