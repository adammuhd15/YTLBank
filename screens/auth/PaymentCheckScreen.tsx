import React from "react";
import { View, Text } from "react-native";
import Button from "../../components/Button";

// Local imports
import { MainStackNavProps } from "../../navigation/stacks/MainStackParamList";

const PaymentCheckScreen: React.FC<MainStackNavProps<"PaymentCheck">> = ({ navigation }) => {
  return (
    <View>
      <Text>Hello</Text>
      <Button
        text="To Main"
        onPress={() => navigation.push("PinPad")}
      />
    </View>
  );
}

export default PaymentCheckScreen;
