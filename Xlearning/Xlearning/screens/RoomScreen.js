import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView, ImageBackground } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const RoomScreen = ({ route, navigation }) => {
  const auth = useSelector((state) => state.auth);
  const { course } = route.params;

  const renderChapterBox = (chapter) => {
    return (
      <View style={styles.box}>
        <Text style={styles.ch}>
          {"\n"}
          {chapter.title}
          {"\n"}
        </Text>

        {chapter.bullets.map((item) => {
          return (
            <Text style={styles.text}>
              <FontAwesome name='circle' size={12} color='black' /> {"\t"}
              {item}
              {"\n"}
            </Text>
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      
      <ImageBackground style={styles.logo} source={require("../assets/hid.jpg")}>
        <Text style={styles.title}>
          {course.id} {course.title}
          {"\n"}
          {"\n"}Teacher : {course.teacherName}
        </Text>
      </ImageBackground>

      {course.chapters.map((chapter) => renderChapterBox(chapter))}

      <View>
          <TouchableOpacity style={styles.confirm} onPress={() => Alert.alert("Simple Button pressed")}>
            <Text style={{ color: "white" }}>
              <Ionicons name='ios-add-circle' size={24} color='white' />
              {"\t"} {"\t"}เพิ่มบทเรียน
            </Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F5F5F5",
  },

  box: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 10,
    borderBottomWidth: 2,
    borderBottomColor: "black",
    padding: 10,
  },
  text: {
    color: "blue",
  },
  ch: {
    color: "black",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    textAlign: "center",
    // padding:"10%",
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "gold",
    color: "black",
    borderWidth: 2,
    padding: "2%",
    width: "100%",
    height: 90,
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: 200,
  },
  confirm: {
    height: 70,
    width: 360,
    borderRadius: 10,
    // backgroundColor: "#FFD700",
    backgroundColor: "green",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    bottom: 0,
  },
});
export default RoomScreen;
