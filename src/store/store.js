import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter"
import counterReducer2 from "./site"

export const store = configureStore({
  reducer: {
    content : counterReducer,
    sitee: counterReducer2
  },
})