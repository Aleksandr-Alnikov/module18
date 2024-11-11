import {configureStore} from "@reduxjs/toolkit";
import beansReduser from './beansSlice';
import combinationReduser from './combinationSlice';
import factsReduser from './factsSlice';
import historyReduser from './historySlice';
import recipesReduser from './recipesSlice';


export const store = configureStore({
    reducer: {
        beans: beansReduser,
        combination: combinationReduser,
        facts: factsReduser,
        history: historyReduser,
        recipes: recipesReduser,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;