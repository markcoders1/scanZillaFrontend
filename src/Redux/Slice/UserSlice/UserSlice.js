// Redux/Slice/UserSlice/UserSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'auth',
  initialState :{
    message: null,
    accessToken: null,
    refreshToken: null,
    _id: null,
    username: null,
    email: null,
    credits: null,
    autocharge: null,
    active: null,
    createdAt: null,
    updatedAt: null,
    __v: null,
    customerId: null,
    success: null,
    authenticated: false,
    otp : null
  },
  reducers: {
    handleAuth: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { handleAuth } = userSlice.actions;
export default userSlice.reducer;
