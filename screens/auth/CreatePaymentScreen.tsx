import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";

// Local imports
import { AppDispatch } from "../../redux/store";
import Button from "../../components/Button";
import { Colors } from "../../constants/Colors";
import { MainStackNavProps } from "../../navigation/stacks/MainStackParamList";


const CreatePaymentScreen: React.FC<MainStackNavProps<"CreatePayment">> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.error }}>
      <Button
        text="Create Payment"
        onPress={() => navigation.pop()}
      />
    </View>
  )
}

export default CreatePaymentScreen;
