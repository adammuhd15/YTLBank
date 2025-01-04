import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Local imports
import { AppDispatch, RootState } from "../../redux/store";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { Colors } from "../../constants/Colors";
import { MainStackNavProps } from "../../navigation/stacks/MainStackParamList";
import KeyboardAvoidingScrollView from "../../components/KeyboardAvoidingScrollView";
import {
  setAccountNumber,
  setAmount,
  setBankName,
  setPaymentDetails,
  setRecipientReference,
  setTransferMode,
  setTransferType,
  resetForm,
} from "../../redux/slice/mainReducer";

const CreatePaymentScreen: React.FC<MainStackNavProps<"CreatePayment">> = ({ navigation }) => {
  // Dispatch
  const dispatch = useDispatch<AppDispatch>();
  // State
  const accountNumber = useSelector<RootState, string>((state) => state.main.accountNumber);
  const bankName = useSelector<RootState, string>((state) => state.main.bankName);
  const transferType = useSelector<RootState, string>((state) => state.main.transferType);
  const transferMode = useSelector<RootState, string>((state) => state.main.transferMode);
  const amount = useSelector<RootState, string>((state) => state.main.amount);
  const recipientReference = useSelector<RootState, string>((state) => state.main.recipientReference);
  const paymentDetails = useSelector<RootState, string>((state) => state.main.paymentDetails);
  useEffect(() => {
    return () => {
      dispatch(resetForm());
    }
  }, [])
  return (
    <KeyboardAvoidingScrollView>
      <View style={{ padding: 20, gap: 20 }}>
        <TextField
          value={accountNumber}
          label="Account Number"
          onChangeText={(text) => dispatch(setAccountNumber(text))}
          keyboardType="number-pad"
        />
        <TextField
          value={bankName}
          label="Bank Name"
          onChangeText={(text) => dispatch(setBankName(text))}
        />
        <TextField
          value={transferType}
          label="Transfer Type"
          onChangeText={(text) => dispatch(setTransferType(text))}
        />
        <TextField
          value={transferMode}
          label="Transfer Mode"
          onChangeText={(text) => dispatch(setTransferMode(text))}
        />
        <TextField
          value={amount}
          label="Amount"
          onChangeText={(text) => dispatch(setAmount(text))}
          keyboardType="number-pad"
        />
        <TextField
          value={recipientReference}
          label="Enter recipient reference"
          onChangeText={(text) => dispatch(setRecipientReference(text))}
          maxLength={50}
          showLength
        />
        <TextField
          value={paymentDetails}
          label="Enter payment details (Optional)"
          onChangeText={(text) => dispatch(setPaymentDetails(text))}
          showLength
        />
        <Button
          text="Next"
          onPress={() => navigation.push("PaymentCheck")}
        />
      </View>
    </KeyboardAvoidingScrollView>
  )
}

export default CreatePaymentScreen;
