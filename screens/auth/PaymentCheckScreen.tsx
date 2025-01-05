import React, { useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

// Local imports
import Button from "../../components/Button";
import { MainStackNavProps } from "../../navigation/stacks/MainStackParamList";
import HomeAccountBalance from "../../components/HomeAccountBalance";
import PaymentCheckFirstTitle from "../../components/PaymentCheckFirstTitle";
import PaymentCheckAmount from "../../components/PaymentCheckAmount";
import PaymentCheckRecipients from "../../components/PaymentCheckRecipients";
import { setPaymentBiometricsChecking } from "../../redux/slice/mainReducer";
import { Colors } from "../../constants/Colors";

const PaymentCheckScreen: React.FC<MainStackNavProps<"PaymentCheck">> = ({ navigation }) => {
  const safeInsets = useSafeAreaInsets();
  const dispatch = useDispatch();

  // Callback memoized
  const handleBiometricsChecking = () => {
    dispatch(setPaymentBiometricsChecking(true));
    navigation.navigate("PinPad");
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
        onPress={handleBiometricsChecking}
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
