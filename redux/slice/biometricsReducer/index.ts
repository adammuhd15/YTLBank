import { createSlice } from "@reduxjs/toolkit"

// Local imports
import type { RootState } from "../../store";
import { BiometricsReducerProps } from "./BiometricsReducerProps";

// Define the initial state using that type
const initialState: BiometricsReducerProps = {
  isBiometricSupported: false,
  biometricsCode: [],
  isBioLoading: false,
}

export const biometricsSlice = createSlice({
  name: "biometricsReducer",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsBiometricSupported: (state, action) => {
      state.isBiometricSupported = action.payload;
    },
    setBiometricsCode: (state, action) => {
      state.biometricsCode = [...action.payload];
    },
    setIsBioLoading: (state, action) => {
      state.isBioLoading = action.payload;
    },
  },
})

export const {
  setIsBiometricSupported,
  setBiometricsCode,
  setIsBioLoading,
} = biometricsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.biometrics;

export default biometricsSlice.reducer
