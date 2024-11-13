import {Facts} from "../components/types/types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";



type FactsState = {
    facts: Facts[] | null;
    isLoading: boolean;
    isError: boolean;
};

const initialState: FactsState = {
    facts: null,
    isLoading: false,
    isError: false,
};


export const fetchFacts = createAsyncThunk('facts/fetchFacts', async () => {
    const res = await  fetch('https://jellybellywikiapi.onrender.com/api/facts');
    const data = await res.json();

    return data.items;
});


const factsSlice = createSlice({
    name: 'facts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFacts.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchFacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.facts = action.payload;
            })
            .addCase(fetchFacts.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    }
});


export default factsSlice.reducer;