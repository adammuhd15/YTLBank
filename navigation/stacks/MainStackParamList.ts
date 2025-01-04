import { RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type MainStackParamList = {
  MainStack: undefined;
  // Bottom Tab Start
  Home: undefined;
  Profile: undefined;
  //Bottom Tab End
  CreatePayment: undefined;
  PaymentCheck: undefined;
  PinPad: undefined;
};

export type MainStackNavProps<T extends keyof MainStackParamList> = {
  navigation: NativeStackNavigationProp<MainStackParamList, T>;
  route: RouteProp<MainStackParamList, T>;
};
