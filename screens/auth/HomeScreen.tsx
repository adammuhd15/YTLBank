import React from "react";
import {
  View,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";

// Local imports
import { AppDispatch } from "../../redux/store";
import { Colors } from "../../constants/Colors";
import { MainStackNavProps } from "../../navigation/stacks/MainStackParamList";
import HomeAccountBalance from "../../components/HomeAccountBalance";
import HomeTasks from "../../components/HomeTasks";
import HomeNews from "../../components/HomeNews";

const horizontalData = [
  "SecureTAC",
  "Transfer",
  "JOMPay",
  "Top Up",
]

const HomeScreen: React.FC<MainStackNavProps<"Home">> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleTapItem = (item: string) => {
    switch (item) {
      case "SecureTAC": {
        break;
      }
      case "Transfer": {
        navigation.push("CreatePayment")
        break;
      }
      case "JOMPay": {
        break;
      }
      case "Top Up": {
        break;
      }
      default: {
        break;
      }
    }
  }

  return (
    <ScrollView style={{ backgroundColor: Colors.white }}>
      <View style={{ flex: 1, padding: 20, gap: 20 }}>
        <HomeAccountBalance />
        <HomeTasks
          horizontalData={horizontalData}
          handleTapItem={handleTapItem}
        />
        <HomeNews />
      </View>
    </ScrollView>
  )
}

export default HomeScreen;
