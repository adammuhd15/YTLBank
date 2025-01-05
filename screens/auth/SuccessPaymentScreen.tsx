import React from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

// Local imports
import Button from "../../components/Button";
import { MainStackNavProps } from "../../navigation/stacks/MainStackParamList";
import { Colors } from "../../constants/Colors";
import { RootState } from "../../redux/store";
import SuccessPaymentContent from "../../components/SuccessPaymentContent";

const SuccessPaymentScreen: React.FC<MainStackNavProps<"SuccessPayment">> = ({ navigation }) => {
  const safeInsets = useSafeAreaInsets();
  const isPaymentError = useSelector<RootState, boolean>((state) => state.main.isPaymentError);
  const componentColor: string = isPaymentError ? Colors.error : Colors.green
  return (
    <View style={successPaymentStyles.container}>
      <SuccessPaymentContent />
      <Button
        text="Go Back"
        onPress={() => navigation.pop(4)}
        containerStyle={{
          backgroundColor: componentColor,
          marginBottom: safeInsets.bottom
        }}
      />
    </View>
  );
}

export default SuccessPaymentScreen;

const successPaymentStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
    justifyContent: "space-between",
  },
});
