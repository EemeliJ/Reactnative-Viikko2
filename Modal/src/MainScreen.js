import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

const MainScreen = ({ onShowModal }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button mode="contained" onPress={onShowModal}>
        Show Modal Message
      </Button>
    </View>
  );
};

export default MainScreen;

