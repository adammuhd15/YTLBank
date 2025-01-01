import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

// Local imports
import { AppDispatch } from "../../redux/store";
import { setIsAuth } from "../../redux/slice/navigationReducer";
import Button from "../../components/Button";


function ProfileScreen() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "purple" }}>
      <Button
        text="Log Out"
        onPress={() => dispatch(setIsAuth(false))}
        containerStyle={{ marginTop: 20 }}
      />
    </View>
  )
}

export default ProfileScreen;
