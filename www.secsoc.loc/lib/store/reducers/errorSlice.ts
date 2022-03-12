import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IErrorState {
    errors: string[];
}


const initialState: IErrorState = {
    errors: []
}

export const errorSlice = createSlice({
    name: "error",
    initialState,
    reducers : {
        add(state, action: PayloadAction<string>) {
            state.errors.push(action.payload);
        },
        remove(state, action: PayloadAction<number>) {
            state.errors.splice(action.payload);
        }
    },
});


export default errorSlice.reducer;