import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

const AssignmentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assignments</Text>
      {/* Add your assignments list here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.text,
    marginVertical: 16,
  },
});

export default AssignmentsScreen;
