import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FlexSettings {
    direction: 'row' | 'column'
    wrap: 'nowrap' | 'wrap'
    justifyContent: 'start'
    alignItem: 'start'
    gap: number
}

const initialState: FlexSettings = {
    direction: 'row',
    wrap: 'nowrap',
    justifyContent: 'start',
    alignItem: 'start',
    gap: 0
}
const ContentSlicer = createSlice({
    name: 'flex',
    initialState,
    reducers: {
        // Actions
    }
})

export const {  } = ContentSlicer.actions
export default ContentSlicer.reducer