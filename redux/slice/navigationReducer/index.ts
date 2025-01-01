import { createSlice } from "@reduxjs/toolkit"

// Local imports
import type { RootState } from "../../store";
import { NavigationReducerProps } from "./NavigationReducerProps";

// Define the initial state using that type
const initialState: NavigationReducerProps = {
  isAuth: false,
  isLoading: false,
}

export const navigationSlice = createSlice({
  name: "navigationReducer",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
})

export const {
  setIsAuth,
} = navigationSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.navigation;

export default navigationSlice.reducer
