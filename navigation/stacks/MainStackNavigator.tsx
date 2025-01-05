import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Local imports
import BottomTabNavigator from "../tabs/BottomTabNavigator";
import CreatePaymentScreen from "../../screens/auth/CreatePaymentScreen";
import PaymentCheckScreen from "../../screens/auth/PaymentCheckScreen";
import PinPadScreen from "../../screens/unauth/PinPadScreen";
import SuccessPaymentScreen from "../../screens/auth/SuccessPaymentScreen";
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
      />
      <MainStack.Screen
        name="PaymentCheck"
        component={PaymentCheckScreen}
      />
      <MainStack.Screen
        name="PinPad"
        component={PinPadScreen}
      />
      <MainStack.Screen
        name="SuccessPayment"
        component={SuccessPaymentScreen}
      />
    </MainStack.Navigator>
  );
}

export default MainStackNavigator;
