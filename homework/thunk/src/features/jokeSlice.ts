import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getJokeAsync } from "./jokeApi";
export enum Status {
    IDEL = "idel",
    LOADING = "loading",
    FAILED ="failed"
}   
interface JokeType{
    value:string[];
    status:string
}
const initialState:JokeType = {
    value: ['Chuck Norris uses a Glock as a PEZ dispenser.'], // initial
    status:""
}
export const jokeSlice = createSlice({
    name: "joke",// we can call how we want
    initialState,
    reducers: {
        addJoke: (state, action: PayloadAction<string>) => {
            console.log('third');
            
            state.value[0] = action.payload // we need a interface for that worked 
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getJokeAsync.pending, (state)=>{
            state.status = Status.LOADING
        })
        .addCase(getJokeAsync.fulfilled, (state , action)=>{
            state.status = Status.IDEL
            state.value[0] = action.payload;
        })
        .addCase(getJokeAsync.rejected, (state)=>{
            state.status = Status.FAILED
        })
    }
})
export default jokeSlice.reducer; // we need to export the all slice
export const {addJoke} = jokeSlice.actions;