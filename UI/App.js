import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyTabNavigator from "./navigation/MyTabNavigator";


export default function App() {
  // return <MyNavigator />;
  return (
    
      <MyTabNavigator />
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

  },
});