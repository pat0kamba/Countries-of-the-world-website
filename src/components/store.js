import {configureStore} from "@reduxjs/toolkit";
import countrySlice from "./countrySlice.js";

const store = configureStore({
   reducer:{
       country:countrySlice.reducer
   }
});

export default store;