import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import Entypo from "@expo/vector-icons/Entypo";
import { useDispatch } from "react-redux";

// Local imports
import { handleBiometricAuth } from "../../utils/LocalAuthFunc";
import { AppDispatch } from "../../redux/store";
import { setIsAuth } from "../../redux/slice/navigationReducer";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [currentPass, setCurrentPass] = useState("somerandompassword");
  const dispatch = useDispatch<AppDispatch>();

  const handleAuth = async () => {
    const success = await handleBiometricAuth();
    if (success) {
      dispatch(setIsAuth(true));
    } else {
      Alert.alert(
        "Error",
        "Log In with Password/PIN",
        [
          {
            text: "Okay",
            // onPress: () => dispatch(setIsAuth(true)),
            onPress: () => setIsBiometricSupported(false),
          }
        ]
      )
    }
  }

  const initialRun = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    setIsBiometricSupported(compatible);
    setIsLoading(false);
  }

  useEffect(() => {
    initialRun();
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "orange" }}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "orange" }}>
      <Text style={{ marginVertical: 20 }}>
        {isBiometricSupported
          ? "Use Biometrics to Log In"
          : "Enter password to Log In"
        }
      </Text>
      {isBiometricSupported
        ? (
          <TouchableOpacity onPress={handleAuth}>
            <Entypo
              name="fingerprint"
              size={50}
              color={"black"}
            />
          </TouchableOpacity>
        )
        : (
          <>
            <TextField
              label="Password"
              // maxLength={50}
              value={currentPass}
              // showLength
              secureTextEntry
              onChangeText={setCurrentPass}
            />
            <Button
              text="Log In"
              onPress={() => dispatch(setIsAuth(true))}
              containerStyle={{ marginTop: 20 }}
            />
          </>
        )
      }
    </View>
  )
}

export default LoginScreen;
