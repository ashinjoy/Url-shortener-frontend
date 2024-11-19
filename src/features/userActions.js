import { createAsyncThunk } from "@reduxjs/toolkit";
import { userSignupService ,  userLoginService ,shortenUrlService } from "./userService";




export const userSignUp = createAsyncThunk('userSignup',async(data,{rejectWithValue})=>{
    try {
       const response =  await userSignupService(data)
       console.log('response in action',response.dat);
       return response.data
    } catch (error) {
        console.error(error);
        rejectWithValue(error?.response?.data)
        
    }

})

export const userLogin = createAsyncThunk('userLogin',async(data,{rejectWithValue})=>{
try {
    const response = await userLoginService(data)
    return response.data
} catch (error) {
    console.error(error);
    
}
})

export const shortenUrl = createAsyncThunk('shorUrl',async(data,{rejectWithValue})=>{
    try {
        const response = await shortenUrlService(data)
        return response.data
    } catch (error) {
        console.error(error);
        rejectWithValue(error.response?.data)
        
    }
})