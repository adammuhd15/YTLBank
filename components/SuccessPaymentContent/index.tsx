import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";

// Local imports
import { RootState } from "../../redux/store";
import { Colors } from "../../constants/Colors";

const SuccessPaymentContent = () => {
  const isPaymentError = useSelector<RootState, boolean>((state) => state.main.isPaymentError);
  const componentColor: string = isPaymentError ? Colors.error : Colors.green
  return (
    <View
      style={successPaymentStyles.subContainer}
    >
      <Ionicons
        name={isPaymentError ? "logo-xbox" : "checkbox"}
        size={100}
        color={componentColor}
      />
      <Text style={successPaymentStyles.boldTitle}>
        {isPaymentError ? "Error!" : "Congratulations!"}
      </Text>
      <Text style={successPaymentStyles.lightTitle}>
        {isPaymentError ?
          "There seems to be an error whilst making the payment. Please try again later."
          :
          "You have transferred successfully to your recipient. If you made a mistake, please contact our support team."
        }
      </Text>
    </View>
  );
}

export default SuccessPaymentContent;

const successPaymentStyles = StyleSheet.create({
  subContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  boldTitle: {
    fontWeight: "900",
    fontSize: 20,
  },
  lightTitle: {
    fontWeight: "medium",
    fontSize: 16,
    textAlign: "center",
  },
})
