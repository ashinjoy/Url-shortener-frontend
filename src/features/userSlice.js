import { createSlice } from "@reduxjs/toolkit";
import { shortenUrl, userLogin, userSignUp } from "./userActions";
import { act } from "react";

const initialState = {
  user: null,
  loading: false,
  success: false,
  message: "",
  url : null,
  error: null,
};

const user = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    resetState(){
      return initialState
    }
  },
  extraReducers(builder) {
    builder.addCase(userSignUp.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(userSignUp.fulfilled, (state, action) => {
        state.success = true
        state.message = action.payload.message
    })
    .addCase(userSignUp.rejected, (state, action) => {
      state.message = action.payload.message
      state.error = action.payload.details
    })
    .addCase(userLogin.pending,(state,action)=>{
      state.loading =  true
    })
    .addCase(userLogin.fulfilled,(state,action)=>{
      state.success =true
      state.message = action.payload?.message
    })
    .addCase(userLogin.rejected,(state,action)=>{
      state.message = action.payload?.message
      state.error = action.payload?.details
    })
    .addCase(shortenUrl.pending,(state,action)=>{
      state.loading = true
    })
    .addCase(shortenUrl.fulfilled,(state,action)=>{
      state.success  = true
      state.message = action.payload?.message
      state.url = action.payload?.shortUrl
    })
    .addCase(shortenUrl.rejected,(state,action)=>{
      state.message = action.payload.message
    })

  },
});
export const {resetState} = user.actions
export default user.reducer
