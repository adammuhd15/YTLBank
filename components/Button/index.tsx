import React from "react";
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, StyleProp, ViewStyle, TextStyle } from "react-native";

// Local imports
import { Colors } from "../../constants/Colors";
import { useCountRenders } from "../../utils/useCountRenders";

interface ButtonProps {
  text: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({
  text="",
  onPress=() => null,
  containerStyle,
  textStyle,
}) => {
  // useCountRenders({ component: `${text} Button` })
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonStyle.buttonContainer, containerStyle]}
    >
      <Text
        style={[buttonStyle.buttonTitle, textStyle]}
      >{text}</Text>
    </TouchableOpacity>
  )
}

const buttonStyle = StyleSheet.create({
  buttonContainer: {
    padding: 20,
    backgroundColor: Colors.green,
    borderRadius: 5,
    alignItems: "center"
  },
  buttonTitle: {
    fontSize: 20,
    color: Colors.white
  },
})

export default React.memo(Button);
