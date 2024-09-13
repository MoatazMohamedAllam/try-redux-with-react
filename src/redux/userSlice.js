import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const registerUser = createAsyncThunk(
    'user/register', // this will be prefix for pending, fulfiled, rejected to differentiate action type
    async (userData) => {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', userData);
        return response.data;
    }

);


const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.userInfo = action.payload
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        });
    }
});

export default userSlice.reducer;