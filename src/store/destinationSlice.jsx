import { createSlice } from "@reduxjs/toolkit/";

 const defaultState = "";

  const destinationSlice = createSlice({
    name: "menu",
    initialState: defaultState,
    reducers: {
      setMenuDestination(state, action){
         return action.payload; 
      }
    }
  });

export const { setMenuDestination } = destinationSlice.actions;
export default destinationSlice.reducer;