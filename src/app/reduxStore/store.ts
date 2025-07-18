'use client'
import { configureStore } from "@reduxjs/toolkit";
// import sideBarReducer from "./sideBarSlice"
import sideBarReducer from "./sideBarSlice";

const store=configureStore({
  reducer:{
    sideBar:sideBarReducer,
  }
});

export type sideBarState = ReturnType<typeof store.getState>;
export default store;