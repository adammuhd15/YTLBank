import React from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { useCountRenders } from "../../utils/useCountRenders";
import { PinInputProps } from "./PinInputProps";
import {
  _spacing,
  pinLength,
  pinSize,
  pinSpacing
} from "../../constants/DialPadDimensions";
import { Colors } from "../../constants/Colors";

const PinInput: React.FC<PinInputProps> = ({ biometricsCode }) => {
  // useCountRenders({ component: "PinInput" });
  return (
    <View style={pinInputStyles.container}>
      {[...Array(pinLength).keys()].map((i, index) => {
        return (
          <View
            key={index.toString()}
            style={[pinInputStyles.hashedPin, pinInputPassStyles(biometricsCode[i])]}
          />
        );
      })}
    </View>
  );
}

export default React.memo(PinInput);

// function for dynamic style
const pinInputPassStyles = (item?: number): ViewStyle => ({
  height: typeof item === "number" ? pinSize : 2,
})

const pinInputStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: pinSpacing * 2,
    marginBottom: _spacing * 2,
    height: pinSize * 2,
    alignItems: "flex-end",
  },
  hashedPin: {
    width: pinSize,
    borderRadius: pinSize / 2,
    backgroundColor: Colors.green,
  },
});
