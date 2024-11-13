import {Types} from "../components/types/types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


type BeansState = {
    beans: Types[] | null;
    updateBeans: Types[] | null;
    beanData: Types | null;
    isLoading: boolean;
    isError: boolean;
};

const initialState: BeansState = {
    beans: null,
    updateBeans: null,
    beanData: null,
    isLoading: false,
    isError: false,
};


export const fetchBeans = createAsyncThunk('beans/fetchBeans', async () => {
    const res = await fetch('https://jellybellywikiapi.onrender.com/api/Beans?pageIndex=1&pageSize=100');
    const data = await res.json();

    return data.items;
});

export const fetchBeanId = createAsyncThunk('beans/fetchBeanId', async (id: string) => {
    const res = await fetch(`https://jellybellywikiapi.onrender.com/api/Beans/${id}`);
    const data = await res.json();
    return data;
});


const beanSlice = createSlice({
    name: 'beans',
    initialState,
    reducers: {
        filterBeans: (state, action) => {
            if (action.payload) {
                state.updateBeans = state.beans?.filter(item => item.flavorName.includes(action.payload)) || null;
            } else {
                state.updateBeans = state.beans;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBeans.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchBeans.fulfilled, (state, action) => {
                state.isLoading = false;
                state.beans = action.payload;
                state.updateBeans = action.payload;
            })
            .addCase(fetchBeans.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(fetchBeanId.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchBeanId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.beanData = action.payload;
            })
            .addCase(fetchBeanId.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});


export const {filterBeans} = beanSlice.actions;
export default beanSlice.reducer;