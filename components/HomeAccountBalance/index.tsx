import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

// Local imports
import { Colors } from "../../constants/Colors";

const HomeAccountBalance = () => {
  return (
    <View
      style={accBalanceStyle.container}
    >
      <Text style={accBalanceStyle.accountType}>iJimat Account</Text>
      <Text style={accBalanceStyle.accountNumber}>0120 7827 1222</Text>
      <Text style={accBalanceStyle.accountBalance}>RM 34,292.22</Text>
    </View>
  );
}

export default React.memo(HomeAccountBalance);

const accBalanceStyle = StyleSheet.create({
  container: {
    padding: 20,
    gap: 5,
    alignItems: "center",
    backgroundColor: Colors.green,
    borderWidth: 2,
    borderColor: Colors.black,
    borderRadius: 5,
  },
  accountType: {
    fontWeight: "bold",
    fontSize: 18
  },
  accountNumber: {
    fontWeight: "regular",
    fontSize: 16
  },
  accountBalance: {
    fontWeight: "900",
    fontSize: 20
  },
})
