import React, { useCallback, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Local imports
import { AppDispatch, RootState } from "../../redux/store";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
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
  const amountRegex = /^\d+?\.\d{2}$/;
  // const amountRegex = /^\$?(([1-9]\d{0,2}(,\d{3})*)|0)?\.\d{1,2}$/;
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

  // Callback Memoized
  const callbackAccountNumber = useCallback((text: string) => dispatch(setAccountNumber(text)), [accountNumber])
  const callbackBankName = useCallback((text: string) => dispatch(setBankName(text)), [bankName])
  const callbackTransferType = useCallback((text: string) => dispatch(setTransferType(text)), [transferType])
  const callbackTransferMode = useCallback((text: string) => dispatch(setTransferMode(text)), [transferMode])
  const callbackAmount = useCallback((text: string) => dispatch(setAmount(text)), [amount])
  const callbackRecipientReference = useCallback((text: string) => dispatch(setRecipientReference(text)), [recipientReference])
  const callbackPaymentDetails = useCallback((text: string) => dispatch(setPaymentDetails(text)), [paymentDetails])
  const callbackNextButton = useCallback(() => {
    const checkedVerified = amountRegex.test(amount);
    if (checkedVerified) {
      navigation.push("PaymentCheck")
    }
  }, [amount])

  // Lifecycle
  useEffect(() => {
    return () => {
      dispatch(resetForm());
    }
  }, [])

  return (
    <KeyboardAvoidingScrollView>
      <View style={createPaymentStyles.subContainer}>
        <TextField
          value={accountNumber}
          label="Account Number"
          onChangeText={callbackAccountNumber}
          keyboardType="number-pad"
        />
        <TextField
          value={bankName}
          label="Bank Name"
          onChangeText={callbackBankName}
        />
        <TextField
          value={transferType}
          label="Transfer Type"
          onChangeText={callbackTransferType}
        />
        <TextField
          value={transferMode}
          label="Transfer Mode"
          onChangeText={callbackTransferMode}
        />
        <TextField
          value={amount}
          label="Amount"
          onChangeText={callbackAmount}
          keyboardType="decimal-pad"
          errorMessage={amountRegex.test(amount) ? "" : "Format must be in 9.99"}
        />
        <TextField
          value={recipientReference}
          label="Enter recipient reference"
          onChangeText={callbackRecipientReference}
          maxLength={50}
          showLength
        />
        <TextField
          value={paymentDetails}
          label="Enter payment details (Optional)"
          onChangeText={callbackPaymentDetails}
          showLength
        />
        <Button
          text="Next"
          onPress={callbackNextButton}
          disabled={!amountRegex.test(amount)}
        />
      </View>
    </KeyboardAvoidingScrollView>
  )
}

export default CreatePaymentScreen;

const createPaymentStyles = StyleSheet.create({
  subContainer: {
    padding: 20,
    gap: 20,
  },
});
