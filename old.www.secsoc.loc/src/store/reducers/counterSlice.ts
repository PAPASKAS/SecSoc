import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "@/store/store"

interface CounterState {
    value: number
}
const initialState: CounterState = {
    value: 10,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const selectCount = (state: RootState) => state.counterSlice.value
export default counterSlice.reducer