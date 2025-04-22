import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name:"counter",
  initialState:{
    count:0
  },
  reducers:{
    increment:(state,_action)=>{
        state.count+=1;
    },
    decrement:(state,_action)=>{
        state.count-=1;
    },
  }
}
);
export const{increment,decrement}=counterSlice.actions;
export default counterSlice.reducer;