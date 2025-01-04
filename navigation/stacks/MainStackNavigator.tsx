import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Local imports
import BottomTabNavigator from "../tabs/BottomTabNavigator";
import CreatePaymentScreen from "../../screens/auth/CreatePaymentScreen";
import { MainStackParamList } from "./MainStackParamList";

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="MainStack"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="CreatePayment"
        component={CreatePaymentScreen}
        // options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
}

export default MainStackNavigator;
