import React, { useEffect, useCallback } from "react";
import {
  View,
  Text,
  Alert,
  Platform,
  StyleSheet
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Local imports
import { handleBiometricAuth } from "../../utils/LocalAuthFunc";
import { AppDispatch, RootState } from "../../redux/store";
import { setIsAuth } from "../../redux/slice/navigationReducer";
import {
  setIsBioLoading,
  setIsBiometricSupported,
  setBiometricsCode
} from "../../redux/slice/biometricsReducer";
import PinInput from "../../components/PinInput";
import DialPad from "../../components/DialPad";
import BiometricsButton from "../../components/BiometricsButton";
import { pinLength } from "../../constants/DialPadDimensions";
import { Colors } from "../../constants/Colors";
import { MainStackNavProps } from "../../navigation/stacks/MainStackParamList";

const PinPadScreen: React.FC<MainStackNavProps<"PinPad">> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  const isBiometricSupported = useSelector<RootState, boolean>((state) => state.biometrics.isBiometricSupported);
  const biometricsCode = useSelector<RootState, number[]>((state) => state.biometrics.biometricsCode);
  const isBioLoading = useSelector<RootState, boolean>((state) => state.biometrics.isBioLoading);
  // Main
  const paymentBiometricsChecking = useSelector<RootState, boolean>((state) => state.main.paymentBiometricsChecking);

  // Function
  const handleAuth = async () => {
    const success = await handleBiometricAuth();
    if (isBioLoading) {
      dispatch(setIsBioLoading(false));
    }
    if (success) {
      if (paymentBiometricsChecking) {
        handleConfirmPayment();
      } else {
        dispatch(setIsAuth(true));
      }
    } else {
      Alert.alert(
        `${Platform.OS === "ios" ? "Face ID" : "Fingerprint"} Error`,
        "Log In with PIN",
        [
          {
            text: "Okay",
            onPress: () => dispatch(setIsBiometricSupported(false)),
          }
        ]
      )
    }
  }

  const authenticateUser = () => {
    if (paymentBiometricsChecking) {
      handleConfirmPayment();
    } else {
      dispatch(setIsAuth(true));
    }
  }

  const handleConfirmPayment = () => {
    navigation.push("SuccessPayment");
  }

  // Callback memoized
  const onTapPinPad = useCallback((item: number | string) => {
    if (item === "del") {
      if (biometricsCode.length === 0) return
      const newArray = biometricsCode.slice(0, biometricsCode.length - 1);
      dispatch(setBiometricsCode(newArray));
    } else if (typeof item === "number") {
      if (biometricsCode.length === pinLength) return
      const newArray = [...biometricsCode, item];
      dispatch(setBiometricsCode(newArray));
    }
  }, [biometricsCode])

  // Lifecycle
  useEffect(() => {
    if (isBiometricSupported) {
      handleAuth();
    }
  }, [isBiometricSupported === true])

  useEffect(() => {
    if (biometricsCode.length === 6) {
      authenticateUser();
    }
    return () => { // componentWillUnmount
      dispatch(setBiometricsCode([])); // Reset bio code
    }
  }, [(isBiometricSupported === false && biometricsCode.length === 6)])

  if (isBioLoading) {
    return (
      <View style={pinpadStyles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={pinpadStyles.container}>
      <PinInput
        biometricsCode={biometricsCode}
      />
      <DialPad
        onPress={onTapPinPad}
      />
      <BiometricsButton />
    </View>
  )
}

export default PinPadScreen;

const pinpadStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
})
