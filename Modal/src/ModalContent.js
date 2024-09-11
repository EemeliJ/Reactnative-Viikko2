import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ModalContent = ({ onClose }) => {
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.modalText}>This is Modal...</Text>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: 300,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  modalText: {
    fontSize: 16,
    color: "#333",
  },
  closeButton: {
    marginTop: 15,
    alignItems: "center",
  },
  closeText: {
    color: "blue",
    fontWeight: "bold",
  },
};

export default ModalContent;
