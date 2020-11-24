import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button title='Click Here' onPress={() => alert("Button Clicked!")} />
      <Button title='Go to home' onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
