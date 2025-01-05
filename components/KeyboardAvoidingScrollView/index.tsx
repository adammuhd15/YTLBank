import React from "react";
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

// Local imports
import { Colors } from "../../constants/Colors";

const KeyboardAvoidingScrollView = ({ children }: { children?: React.ReactNode }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: Colors.white }}
      keyboardVerticalOffset={120}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default KeyboardAvoidingScrollView;
