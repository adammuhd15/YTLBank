import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PaymentCheckFirstTitle = () => {
  return (
    <View style={paymentCheckStyle.marginBottom50}>
      <Text style={paymentCheckStyle.boldTitle}>Transfer from:</Text>
    </View>
  );
}

export default React.memo(PaymentCheckFirstTitle);

const paymentCheckStyle = StyleSheet.create({
  marginBottom50: {
    marginBottom: 50
  },
  boldTitle: {
    fontWeight: "900",
    fontSize: 20
  },
});
