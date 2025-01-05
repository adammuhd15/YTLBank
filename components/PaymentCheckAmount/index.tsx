import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

// Local imports
import { RootState } from "../../redux/store";
import { Colors } from "../../constants/Colors";

const PaymentCheckAmount = () => {
  const amount = useSelector<RootState, string>((state) => state.main.amount);
  return (
    <View style={paymentCheckStyle.marginVertical50}>
      <Text style={paymentCheckStyle.mediumTitle}>Amount</Text>
      <Text style={[paymentCheckStyle.boldTitle, paymentCheckStyle.selfCenter]}>{`RM ${amount}`}</Text>
    </View>
  );
}

export default React.memo(PaymentCheckAmount);

const paymentCheckStyle = StyleSheet.create({
  marginVertical50: {
    marginVertical: 50
  },
  boldTitle: {
    fontWeight: "900",
    fontSize: 20
  },
  mediumTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  selfCenter: {
    alignSelf: "center",
    color: Colors.pink,
  },
});
