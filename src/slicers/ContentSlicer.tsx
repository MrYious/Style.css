import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Content {
    name: string

}

const initialState: Content = {
    name: ''
}

const ContentSlicer = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        // Actions
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        }
    }
})

export const { setName } = ContentSlicer.actions
export default ContentSlicer.reducer