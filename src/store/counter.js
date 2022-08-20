import { createSlice } from '@reduxjs/toolkit'


export const content = createSlice({
    name: 'counting',
    initialState: {
        content: true
    },
    reducers: {
        setContent: state=> {state.content = !state.content},
    }
})

export const {setContent} = content.actions
export default content.reducer