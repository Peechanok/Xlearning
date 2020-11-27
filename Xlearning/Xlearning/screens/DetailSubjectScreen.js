import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView, ImageBackground } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const DetailSubjectScreen = ({ route, navigation }) => {
  const auth = useSelector((state) => state.auth);
  const { course } = route.params;

  const registerCourse = () => {
    Alert.alert("ยืนยันการลงทะเบียน");
  };

  const enterCourse = () => {
    navigation.navigate("ห้องเรียน", { course: course });
  };

  const shouldRenderRegisterButton = () => {
    if (auth.user.role.toLowerCase() === "student" && !course.registerStudent.includes(auth.user.id)) {
      return (
        <>
          <TouchableOpacity style={styles.btn} onPress={registerCourse}>
            <Text style={{ color: "#32CD32" }}>ลงทะเบียน</Text>
          </TouchableOpacity>
        </>
      );
    } else {
      return <></>;
    }
  };

  const shouldRenderEnterCourseButton = () => {
    if (
      auth.user.role.toLowerCase() === "teacher" ||
      (auth.user.role.toLowerCase() === "student" && course.registerStudent.includes(auth.user.id))
    ) {
      return (
        <TouchableOpacity style={styles.btn2} onPress={enterCourse}>
          <Text style={{ color: "#6A5ACD" }}>เข้าห้องเรียน</Text>
        </TouchableOpacity>
      );
    } else {
      return <></>;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground style={styles.logo} source={require("../assets/wan.png")}>
        <Image style={styles.teacher} source={require("../assets/sehun.jpg")} />
      </ImageBackground>

      <ScrollView style={styles.box}>
        <Text style={styles.title}>
          {course.id} {course.title}
          {"\n"}Teacher : {course.teacherName}
        </Text>
        <View style={{ marginTop: 95 }}>
          <Text style={styles.text}>{course.description}</Text>
        </View>
      </ScrollView>

      <View>
        {shouldRenderRegisterButton()}
        {/* ถ้าลงทะเบียนแล้วจะขึ้นแต่ปุ่มเข้าห้องเรียน */}
        {shouldRenderEnterCourseButton()}
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
  img: {
    position: "absolute",
    height: "70%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 3,
  },
  text: {
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    textAlign: "center",
    padding: "5%",
  },
  title: {
    fontSize: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "gold",
    color: "black",
    borderWidth: 2,
    padding: "5%",
    width: "100%",
    height: 80,
    top: 0,
  },
  box: {
    backgroundColor: "white",
    margin: "5%",
  },
  btn: {
    height: 48,
    width: "90%",
    borderColor: "#32CD32",
    borderWidth: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    bottom: "30%",
    margin: "5%",
    borderRadius: 10,
  },
  btn2: {
    height: 48,
    width: "90%",
    borderColor: "#6A5ACD",
    borderWidth: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    bottom: "30%",
    margin: "5%",
    borderRadius: 10,
  },
  logo: {
    flex: 1,
    width: "100%",
    height: 160,
    resizeMode: "cover",
    justifyContent: "center",
  },
  teacher: {
    width: 90,
    height: 90,
    alignSelf: "center",
    borderRadius: 100,
  },
});
export default DetailSubjectScreen;
