import React from "react";
import {
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

// Local imports
import { Colors } from "../../constants/Colors";
import Button from "../Button";

interface HomeTasksProps {
  horizontalData: string[];
  handleTapItem: (item: string) => void;
}

const HomeTasks: React.FC<HomeTasksProps> = ({ horizontalData, handleTapItem }) => {
  return (
    <>
      <Text style={homeTasksStyle.titleStyle}>What would you like to do today</Text>
      <FlatList
        data={horizontalData}
        horizontal
        keyExtractor={(_, index) => index.toString()}
        style={homeTasksStyle.horizontalListStyle}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={homeTasksStyle.gapStyle}
        renderItem={({ item }) => (
          <Button
            text={item}
            onPress={() => handleTapItem(item)}
            containerStyle={homeTasksStyle.cellContainer}
          />
        )}
      />
    </>
  );
}

export default HomeTasks;

const homeTasksStyle = StyleSheet.create({
  titleStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  horizontalListStyle: {
    flexGrow: 0,
    overflow: "visible",
  },
  gapStyle: {
    gap: 10,
  },
  cellContainer: {
    borderWidth: 1,
    borderColor: Colors.black
  },
})
