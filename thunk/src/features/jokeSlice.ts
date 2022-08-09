import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JokeType{
    value:string[];
}
const initialState:JokeType = {
    value: ['daniel' , 'yoe; ' , 'fd'] // initial
}
export const jokeSlice = createSlice({
    name: "joke",// we can call how we want
    initialState,
    reducers: {
        addJoke: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload);// we need a interface for that worked 
        }
    },
    // I think here we will put the actions
})
export default jokeSlice.reducer; // we need to export the all slice
export const {addJoke} = jokeSlice.actions;