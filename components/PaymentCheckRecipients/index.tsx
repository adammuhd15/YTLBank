import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

// Local imports
import { RootState } from "../../redux/store";

const PaymentCheckRecipients = () => {
  // State
  const accountNumber = useSelector<RootState, string>((state) => state.main.accountNumber);
  const bankName = useSelector<RootState, string>((state) => state.main.bankName);
  const recipientReference = useSelector<RootState, string>((state) => state.main.recipientReference);
  const paymentDetails = useSelector<RootState, string>((state) => state.main.paymentDetails);
  return (
    <View style={paymentCheckStyle.gap20}>
      <Text style={paymentCheckStyle.mediumTitle}>Date: Today</Text>
      <Text style={paymentCheckStyle.mediumTitle}>{`Receipient Reference: ${recipientReference ? recipientReference : "Optional"}`}</Text>
      <Text style={paymentCheckStyle.mediumTitle}>{`Bank Name: ${bankName}`}</Text>
      <Text style={paymentCheckStyle.mediumTitle}>{`Account Number: ${accountNumber}`}</Text>
      <Text style={paymentCheckStyle.mediumTitle}>{`Payment Details: ${paymentDetails ? paymentDetails : "Optional"}`}</Text>
    </View>
  );
}

export default React.memo(PaymentCheckRecipients);

const paymentCheckStyle = StyleSheet.create({
  gap20: {
    gap: 20,
  },
  mediumTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
