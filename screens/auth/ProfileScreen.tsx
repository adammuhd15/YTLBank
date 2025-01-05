import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";

// Local imports
import { AppDispatch } from "../../redux/store";
import { setIsAuth } from "../../redux/slice/navigationReducer";
import Button from "../../components/Button";
import { MainStackNavProps } from "../../navigation/stacks/MainStackParamList";
import { Colors } from "../../constants/Colors";


const ProfileScreen: React.FC<MainStackNavProps<"Profile">> = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.white }}>
      <Button
        text="Log Out"
        onPress={() => dispatch(setIsAuth(false))}
      />
    </View>
  )
}

export default ProfileScreen;
