import ThemeSlicer from "./slicers/ThemeSlicer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        theme: ThemeSlicer
    }
})

export type RootState =  ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch