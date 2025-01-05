import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";

// Local imports
import { Colors } from "../../constants/Colors";
import { RootState } from "../../redux/store";

const HomeAccountBalance = () => {
  // State
  const accountNumber = useSelector<RootState, string>((state) => state.myAccount.accountNumber);
  const accountType = useSelector<RootState, string>((state) => state.myAccount.accountType);
  const balance = useSelector<RootState, number>((state) => state.myAccount.balance);

  // memo
  const displayBalance = useMemo(() => {
    let MYR = new Intl.NumberFormat().format(balance);
    return `RM ${parseFloat(MYR).toFixed(2)}`
  }, [balance])

  return (
    <View
      style={accBalanceStyle.container}
    >
      <Text style={accBalanceStyle.accountType}>{accountType}</Text>
      <Text style={accBalanceStyle.accountNumber}>{accountNumber}</Text>
      <Text style={accBalanceStyle.accountBalance}>{displayBalance}</Text>
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
