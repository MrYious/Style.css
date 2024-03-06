import { createSlice } from "@reduxjs/toolkit";

type Theme = 'dark' | 'light'

const initialState: {theme: Theme} = {
    theme: 'light'
}

const ThemeSlicer = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        // Actions
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        }
    }
})

export const { toggleTheme } = ThemeSlicer.actions
export default ThemeSlicer.reducer