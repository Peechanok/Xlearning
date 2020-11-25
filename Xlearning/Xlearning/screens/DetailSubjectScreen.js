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

  const shouldRenderRegisterButton = () => {
    if (auth.user.role === "student" && !course.registerStudent.includes(auth.user.id)) {
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
      auth.user.role === "teacher" ||
      (auth.user.role === "student" && course.registerStudent.includes(auth.user.id))
    ) {
      return (
        <TouchableOpacity style={styles.btn2} onPress={() => {}}>
          <Text style={{ color: "#6A5ACD" }}>เข้าห้องเรียน</Text>
        </TouchableOpacity>
      );
    } else {
      return <></>;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require("../assets/wan.png")} />
      <Image style={styles.teacher} source={require("../assets/sehun.jpg")} />

      <View style={styles.box}>
        <Image style={styles.img} source={require("../assets/green-slate.jpg")} />

        <Text style={styles.text}>
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {course.description}
          {"\n"}
          {"\n"}
        </Text>
        <Text style={styles.title}>
          {course.id} {course.title}
          {"\n"}
          {"\n"}Teacher : {course.teacherName}
        </Text>
      </View>

      <View>
        {shouldRenderRegisterButton()}
        {/* ถ้าลงทะเบียนแล้วจะขึ้นแต่ปุ่มเข้าห้องเรียน */}
        {shouldRenderEnterCourseButton()}
      </View>
    </ScrollView>
  );
};

DetailSubjectScreen.navigationOptions = (navigationData) => {
  const course = navigationData.navigation.getParam("course");
  return {
    headerTitle: course.title, //...ชื่อประเภทอาหาร...,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F5F5F5",
  },
  img: {
    position: "absolute",
    // height: 200,
    // width:  300,
    height: "70%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    // backgroundColor:"black",
    // opacity: 0.5,
    // padding: 10,
    borderWidth: 3,
  },

  teacher: {
    ...StyleSheet.absoluteFill,
    left: "35%",
    right: "35%",
    top: "10%",
    height: "10%",
    width: "30%",
    borderRadius: 100,
  },

  text: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    textAlign: "center",
    padding: "20%",
  },
  title: {
    flex: 1,
    ...StyleSheet.absoluteFill,
    fontSize: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "gold",
    color: "black",
    borderWidth: 2,
    padding: "2%",
    width: "85%",
    height: 80,
    top: 70,
    left: "10%",
    right: "10%",
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "3%",
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
    position: "relative",
    width: "100%",
    height: 200,
    bottom: 10,
  },
});
export default DetailSubjectScreen;
