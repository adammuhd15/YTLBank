import React from "react";
import { useSelector } from "react-redux";

// Local imports
import PinPadScreen from "../screens/unauth/PinPadScreen";
import MainStackNavigator from "../navigation/stacks/MainStackNavigator";
import { RootState } from "../redux/store";

const AppNavigator = () => {
  const isAuth = useSelector<RootState, boolean>((state) => state.navigation.isAuth);
  return (
    <>
      {isAuth
        ? (
          <MainStackNavigator />
        )
        : (
          <PinPadScreen />
        )
      }
    </>
  );
}

export default AppNavigator;