import { createSlice } from "@reduxjs/toolkit"

// Local imports
import type { RootState } from "../../store";
import { MainReducerProps } from "./MainReducerProps";

// Define the initial state using that type
const initialState: MainReducerProps = {
  accountNumber: "",
  bankName: "TOUCH N GO E WALLET",
  transferType: "Fund Transfer",
  transferMode: "DuitNow Transfer",
  amount: "",
  recipientReference: "DuitNow Bank Transfer",
  paymentDetails: "",
}

export const mainSlice = createSlice({
  name: "mainReducer",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAccountNumber: (state, action) => {
      state.accountNumber = action.payload;
    },
    setBankName: (state, action) => {
      state.bankName = action.payload;
    },
    setTransferType: (state, action) => {
      state.transferType = action.payload;
    },
    setTransferMode: (state, action) => {
      state.transferMode = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setRecipientReference: (state, action) => {
      state.recipientReference = action.payload;
    },
    setPaymentDetails: (state, action) => {
      state.paymentDetails = action.payload;
    },
    resetForm: (state) => {
      state.accountNumber = initialState.accountNumber;
      state.bankName = initialState.bankName;
      state.transferType = initialState.transferType;
      state.transferMode = initialState.transferMode;
      state.amount = initialState.amount;
      state.recipientReference = initialState.recipientReference;
      state.paymentDetails = initialState.paymentDetails;
    }
  },
})

export const {
  setAccountNumber,
  setBankName,
  setTransferType,
  setTransferMode,
  setAmount,
  setRecipientReference,
  setPaymentDetails,
  resetForm,
} = mainSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.main;

export default mainSlice.reducer