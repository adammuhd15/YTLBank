import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

// Local imports
import { Colors } from "../../constants/Colors";

const HomeNews = () => {
  return (
    <View style={homeNewsStyle.container}>
      <Text style={homeNewsStyle.newsTitle}>News Article</Text>
      {[...Array(20).keys()].map((_, index) => (
        <View
          key={index.toString()}
          style={homeNewsStyle.newsCells}
        />
      ))}
    </View>
  );
}

export default React.memo(HomeNews);

const homeNewsStyle = StyleSheet.create({
  container: {
    gap: 10
  },
  newsTitle: {
    fontWeight: "bold",
    fontSize: 20
  },
  newsCells: {
    width: "auto",
    height: "auto",
    backgroundColor: Colors.green,
    padding: 20,
    borderRadius: 5
  },
})
