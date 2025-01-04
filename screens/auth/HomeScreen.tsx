import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";

// Local imports
import { AppDispatch } from "../../redux/store";
import Button from "../../components/Button";
import { Colors } from "../../constants/Colors";
import { MainStackNavProps } from "../../navigation/stacks/MainStackParamList";


const HomeScreen: React.FC<MainStackNavProps<"Home">> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.pink }}>
      <Button
        text="Home"
        onPress={() => navigation.push("CreatePayment")}
      />
    </View>
  )
}

export default HomeScreen;
