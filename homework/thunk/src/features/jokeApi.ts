import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// now you build which function you want 
export const getJokeAsync = createAsyncThunk(
    // whice name I want the he will save 
    "joke/fetchJoke",
    // now I start to build the function 
    async () => {
        const { data } = await axios.get("https://api.chucknorris.io/jokes/random")
        const { value } = data;
        //valitation 
        if (!value) return new Error("missing joke")        
        return value;
    }
)