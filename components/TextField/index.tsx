import React from "react";
import {
  TextInput,
  Dimensions,
  StyleSheet,
  View,
  Text,
  StyleProp,
  TextStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";

// Local imports
import { Colors } from "../../constants/Colors";

interface TextFieldProps {
  value: string;
  label: string;
  maxLength?: number;
  showLength?: boolean;
  style?: StyleProp<TextStyle>;
  onFocus?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
  secureTextEntry?: boolean | undefined;
  onChangeText?: ((text: string) => void) | undefined;
}

const TextField: React.FC<TextFieldProps> = ({
    value,
    label,
    maxLength = 20,
    showLength = false,
    style,
    onFocus,
    secureTextEntry,
    onChangeText,
}) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        style={[textFieldStyle.container, style]}
        value={value}
        maxLength={maxLength}
        onFocus={onFocus}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
      {showLength && (
        <Text style={[textFieldStyle.lengthText, { color: value.length < 50 ? Colors.black : Colors.error }]}>{value.length}/{maxLength}</Text>
      )}
    </View>
  )
}

const textFieldStyle = StyleSheet.create({
  container: {
    width: (0.4 * Dimensions.get("window").width),
    height: 40,
    borderWidth: 2,
    borderColor: Colors.black,
    borderRadius: 5,
    padding: 5,
    backgroundColor: Colors.white
  },
  lengthText: {
    textAlign: "right"
  }
})

export default TextField;
