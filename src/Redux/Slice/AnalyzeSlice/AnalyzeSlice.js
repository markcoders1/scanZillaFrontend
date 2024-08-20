// Redux/Slice/UserSlice/UserSlice.js
import { createSlice } from '@reduxjs/toolkit';

const AnalyzeSlice = createSlice({
  name: 'analyzeSlice',
  initialState :{
    TE:[],
    DE:[],
    BE:[],
    KE:[],
    CE:[]
  },
  reducers: {
    handleAnalyzeErrors: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { handleAnalyzeErrors } = AnalyzeSlice.actions;
export default AnalyzeSlice.reducer;
