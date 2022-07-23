import {createSlice} from "@reduxjs/toolkit";

const countrySlice = createSlice({
    name:"country",
    initialState:{data:[], name:'Fiji', capital:'', mode:{backgroundColor:'', color:''}, Mode:true, Filter:""},
    reducers:{
        changeCountry(state,action)
        {
            const country = action.payload;
            state.data = country;
        },
        setName(state, action)
        {
            const newName = action.payload;
            state.name = newName;

        },
        setCapital(state, action)
        {
            state.capital = action.payload;
        },
        changeBgColor(state,action)
        {
            state.mode.backgroundColor=action.payload.bg;
            state.mode.color=action.payload.color;
        },
        setMode(state)
        {
          state.Mode = !state.Mode;
        },
        setFilter(state, action)
        {
          let value = action.payload;
          state.Filter = value;
        }


    }
});

export const countryActions = countrySlice.actions;
export default countrySlice;
