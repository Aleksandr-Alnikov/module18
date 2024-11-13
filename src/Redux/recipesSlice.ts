import {Recipes, Recipe} from "../components/types/types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";




type RecipesState = {
    recipes: Recipes[] | null;
    recipeData: Recipe | null;
    isLoading: boolean;
    isError: boolean;
};

const initialState: RecipesState = {
    recipes: null,
    recipeData: null,
    isLoading: false,
    isError: false,
};


export const fetchRecipes = createAsyncThunk<Recipes[]>('recipes/fetchRecipes', async () => {
    const res = await  fetch('https://jellybellywikiapi.onrender.com/api/recipes');

    if (!res.ok) {
        throw new Error('Рецепты не найдены');
    }

    const data = await res.json();

    return data.items;
});

export const fetchRecipesId = createAsyncThunk<Recipe, string>('recipe/fetchBeanId', async (id: string) => {
    const res = await fetch(`https://jellybellywikiapi.onrender.com/api/recipes/${id}`);

    if (!res.ok) {
        throw new Error('Рецепт не найден');
    }

    const data = await res.json();

    return data;
});


const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchRecipes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.recipes = action.payload;
            })
            .addCase(fetchRecipes.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(fetchRecipesId.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchRecipesId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.recipeData = action.payload;
            })
            .addCase(fetchRecipesId.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    }
});


export default recipesSlice.reducer;