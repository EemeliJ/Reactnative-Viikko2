import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Modal } from "react-native";
import React, { useState } from "react";
import MainScreen from "./src/MainScreen";
import ModalContent from "./src/ModalContent";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <MainScreen onShowModal={() => setModalVisible(true)} />
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <ModalContent onClose={() => setModalVisible(false)} />
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackground: {
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "center",
    marginBottom: 200,
  },
});

export default App;
