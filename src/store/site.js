import { createSlice } from '@reduxjs/toolkit'


export const counting = createSlice({
    name: 'counting',
    initialState: {
        dark: false,
        lang: 'en',
    },
    reducers: {
        setDarkMode: state=> {state.dark = !state.dark},
        setLang: (state,actions)=> {state.language = actions.payload},

    }
})

export const {setDarkMode,setLang} = counting.actions
export default counting.reducer