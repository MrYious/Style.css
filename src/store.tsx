import ContentSlicer from "./slicers/ContentSlicer";
import ThemeSlicer from "./slicers/ThemeSlicer";
import { configureStore } from "@reduxjs/toolkit";
import flexSlicer from "./slicers/flexSlicer";

export const store = configureStore({
    reducer: {
        theme: ThemeSlicer,
        content: ContentSlicer,
        flex: flexSlicer
    }
})

export type RootState =  ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch