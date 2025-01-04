import React from "react";
import { useSelector } from "react-redux";

// Local imports
import PinPadScreen from "../screens/unauth/PinPadScreen";
import ProfileScreen from "../screens/auth/ProfileScreen";
import { RootState } from "../redux/store";

const AppNavigator = () => {
  const isAuth = useSelector<RootState, boolean>((state) => state.navigation.isAuth);
  return (
    <>
      {isAuth
        ? (
          <ProfileScreen />
        )
        : (
          <PinPadScreen />
        )
      }
    </>
  );
}

export default AppNavigator;