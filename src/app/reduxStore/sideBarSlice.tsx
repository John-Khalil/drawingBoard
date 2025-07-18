import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice=createSlice({
  name:"sideBar", // it has to have a name, but it never used
  initialState:{isOpened:false},
  reducers:{
    openSideBar:(state)=>{state.isOpened=true},
    closeSideBar:(state)=>{state.isOpened=false},
  }
});

const sideBarReducer=sideBarSlice.reducer;

export const {openSideBar,closeSideBar}=sideBarSlice.actions;
export default sideBarReducer;