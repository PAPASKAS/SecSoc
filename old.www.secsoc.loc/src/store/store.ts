import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "@/store/reducers/counterSlice"


const store = configureStore({
    reducer: {
        counterSlice
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
