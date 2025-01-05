import React from "react";
import { View, Text } from "react-native";

// Local imports
import Button from "../../components/Button";
import { MainStackNavProps } from "../../navigation/stacks/MainStackParamList";
import { Colors } from "../../constants/Colors";

const SuccessPaymentScreen: React.FC<MainStackNavProps<"SuccessPayment">> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.white }}>
      <Text style={{ fontWeight: "900", fontSize: 20 }}>Success Page</Text>
      <Button
        text="Go Back"
        onPress={() => navigation.pop(4)}
      />
    </View>
  );
}

export default SuccessPaymentScreen;
