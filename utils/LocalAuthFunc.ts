import { Alert } from "react-native"
import * as LocalAuthentication from "expo-local-authentication";

export const fallBackToDefaultAuth = () => {
  console.log("fallback to password authentication");
}

export const alertComponent = (
  title: string,
  mess: string,
  btnTxt?: string | undefined,
  btnFunc?: ((value?: string) => void) | undefined
) => {
  return Alert.alert(title, mess, [
    {
      text: btnTxt,
      onPress: btnFunc,
    }
  ])
}

export const TwoButtonAlert = () => (
  Alert.alert("You are logged in", "Subscribe Now", [
    {
      text: "Back",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "PROCEED", onPress: () => console.log("OK Pressed") }
  ])
);

export const handleBiometricAuth = async (): Promise<boolean> => {
  try {
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    if (!isBiometricAvailable) {
      // return alertComponent(
      //   "Please enter your password",
      //   "Biometric auth not supported",
      //   "OK",
      //   fallBackToDefaultAuth,
      // );
      return false
    }

    let supportedBiometrics
    if (isBiometricAvailable) {
      supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();
    }

    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics) {
      // return alertComponent(
      //   "Biometric record not found",
      //   "Please login with your password",
      //   "OK",
      //   fallBackToDefaultAuth,
      // );
      return false;
    }

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login to YTLBank with biometrics",
      cancelLabel: "Cancel",
      disableDeviceFallback: true,
    });

    if (biometricAuth.success) {
      return true;
    }
    // else {
    //   return alertComponent(
    //     biometricAuth.error,
    //     biometricAuth.warning ?? "Undefined error",
    //   )
    // }
  }
  catch (error) {
    console.log("Error: ", error);
  }
  return false;
}
