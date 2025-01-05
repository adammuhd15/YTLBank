import { createSlice } from "@reduxjs/toolkit"

// Local imports
import type { RootState } from "../../store";
import { MyAccountReducerProps } from "./MyAccountReducerProps";

// Define the initial state using that type
const initialState: MyAccountReducerProps = {
  accountNumber: "",
  accountType: "",
  bankName: "",
  balance: 0,
}

export const myAccountSlice = createSlice({
  name: "myAccountReducer",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAccountNumber: (state, action) => {
      state.accountNumber = action.payload;
    },
    setAccountType: (state, action) => {
      state.accountType = action.payload;
    },
    setBankName: (state, action) => {
      state.bankName = action.payload;
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    resetMyAccount: (state) => {
      state.accountNumber = initialState.accountNumber;
      state.accountType = initialState.accountType;
      state.bankName = initialState.bankName;
      state.balance = initialState.balance;
    },
  },
})

export const {
  setAccountNumber,
  setAccountType,
  setBankName,
  setBalance,
  resetMyAccount,
} = myAccountSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.main;

export default myAccountSlice.reducer
