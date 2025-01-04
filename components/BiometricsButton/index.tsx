import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import { useDispatch } from "react-redux";

// Local imports
import { setIsBiometricSupported } from "../../redux/slice/biometricsReducer";
import { useCountRenders } from "../../utils/useCountRenders";
import { Colors } from "../../constants/Colors";

function BiometricsButton() {
  // useCountRenders({ component: "BiometricsButton" });
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={bioButtonStyle.buttonStyle}
      onPress={() => dispatch(setIsBiometricSupported(true))}
    >
      <Text>{Platform.OS === "ios" ? "Face ID" : "Fingerprint"}</Text>
    </TouchableOpacity>
  );
}

export default React.memo(BiometricsButton);

const bioButtonStyle = StyleSheet.create({
  buttonStyle: {
    marginTop: 50,
    borderWidth: 2,
    borderColor: Colors.black,
    padding: 20,
    borderRadius: 5,
  },
})
