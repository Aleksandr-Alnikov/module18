import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Combination} from "../components/types/types";


type CombinationState = {
    combination: Combination[] | null;
    isLoading: boolean;
    isError: boolean;
};

const initialState: CombinationState = {
    combination: null,
    isLoading: false,
    isError: false,
};


export const fetchCombination = createAsyncThunk('combination/fetchCombination', async () => {
    const res = await fetch('https://jellybellywikiapi.onrender.com/api/combinations');
    const data = await res.json();

    return data.items;
});


const combinationSlice = createSlice({
    name: 'combination',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
    .addCase(fetchCombination.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
            .addCase(fetchCombination.fulfilled, (state, action) => {
                state.isLoading = false;
                state.combination = action.payload;
            })
            .addCase(fetchCombination.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    }
});


export default combinationSlice.reducer;

