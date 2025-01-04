import React from "react";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useCountRenders } from "../../utils/useCountRenders";
import { DialPadProps } from "./DialPadProps";
import {
  _spacing,
  dialPad,
  dialPadSize,
  dialPadTextSize
} from "../../constants/DialPadDimensions";
import { Colors } from "../../constants/Colors";

const DialPad: React.FC<DialPadProps> = ({ onPress }) => {
  // useCountRenders({ component: "DialPad" });
  return (
    <FlatList
      numColumns={3}
      data={dialPad}
      style={dialpadStyles.container}
      scrollEnabled={false}
      columnWrapperStyle={dialpadStyles.gapSize}
      contentContainerStyle={dialpadStyles.gapSize}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => {
        return(
          <TouchableOpacity
            disabled={item === ''}
            onPress={() => onPress(item)}
          >
            <View
              style={[dialpadStyles.numberContainer, dialpadPassStyles(item)]}
            >
              {item === 'del' ? (
                <Ionicons
                  name="backspace-outline"
                  color={Colors.black}
                  size={dialPadTextSize}
                />
              ) : (
                <Text
                  style={dialpadStyles.numberText}
                >{item}</Text>
              )}
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}

export default React.memo(DialPad);

// function for dynamic style
const dialpadPassStyles = (item: string | number): ViewStyle => ({
  borderWidth: typeof(item) === "string" ? 0 : 1,
})

const dialpadStyles = StyleSheet.create({
  container: {
    flexGrow: 0,
  },
  gapSize: {
    gap: _spacing,
  },
  numberContainer: {
    width: dialPadSize,
    height: dialPadSize,
    borderRadius: dialPadSize / 2,
    borderColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontSize: dialPadTextSize,
  },
});
