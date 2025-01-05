import React, { useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import NetInfo from "@react-native-community/netinfo";

// Local imports
import Button from "../../components/Button";
import { MainStackNavProps } from "../../navigation/stacks/MainStackParamList";
import HomeAccountBalance from "../../components/HomeAccountBalance";
import PaymentCheckFirstTitle from "../../components/PaymentCheckFirstTitle";
import PaymentCheckAmount from "../../components/PaymentCheckAmount";
import PaymentCheckRecipients from "../../components/PaymentCheckRecipients";
import {
  setPaymentBiometricsChecking,
  setIsPaymentError,
  setPaymentErrorMessage
} from "../../redux/slice/mainReducer";
import { Colors } from "../../constants/Colors";
import { RootState } from "../../redux/store";

const PaymentCheckScreen: React.FC<MainStackNavProps<"PaymentCheck">> = ({ navigation }) => {
  const safeInsets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const balance = useSelector<RootState, number>((state) => state.myAccount.balance);
  const amount = useSelector<RootState, string>((state) => state.main.amount);

  /**
   * Simulationg API
   * We are checking if amount is sufficient
   * Check if amount + RM 20 is equal or less than current balance amount
   * Check internet connection?
   */
  const handleSimulateAPI = () => {
    NetInfo.fetch()
    .then(state => {
      if (state.isConnected) {
        const numberAmount: number = parseFloat(amount);
        if (balance >= (numberAmount + 20)) {
          dispatch(setPaymentBiometricsChecking(true));
          navigation.navigate("PinPad");
        } else {
          dispatch(setIsPaymentError(true));
          dispatch(setPaymentErrorMessage("Insuffient Fund"));
          navigation.navigate("SuccessPayment");
        }
      } else {
        dispatch(setIsPaymentError(true));
        dispatch(setPaymentErrorMessage("No Internet Connection"));
        navigation.navigate("SuccessPayment");
      }
    })
    .catch((_) => {
      dispatch(setIsPaymentError(true));
      dispatch(setPaymentErrorMessage("Internet Error"));
      navigation.navigate("SuccessPayment");
    })
  }

  // Lifecycle
  useEffect(() => {
    return () => { // componentWillUnmount
      /**
       * Before unmounting the screen, the function below must be run.
       * Otherwise, when authenticating at Unauth or Login screen will cause crash.
       */
      dispatch(setPaymentBiometricsChecking(false));
    }
  }, [])

  return (
    <View style={paymentCheckStyle.container}>
      <ScrollView>
        {/* Account Info */}
        <PaymentCheckFirstTitle />
        <HomeAccountBalance />
        <PaymentCheckAmount />
        {/* Recipient Info */}
        <PaymentCheckRecipients />
      </ScrollView>
      <Button
        text="Transfer Now"
        onPress={handleSimulateAPI}
        containerStyle={{ marginBottom: safeInsets.bottom }}
      />
    </View>
  );
}

export default PaymentCheckScreen;

const paymentCheckStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white,
  },
});
