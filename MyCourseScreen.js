import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import Courses from "../model/courses";

// import MyNavigator  from './navigation/MyNavigator';

const MyCourseScreen = ({ navigation }) => {
  const auth = useSelector((state) => state.auth);
  const shouldRenderCreateCourseButton = () => {
    if (auth.user.role == "teacher") {
      return (
        <View style={{margin:"2%"}}> 
        <Text>{"\n"}{"\n"}</Text>
          <TouchableOpacity style={styles.btn2} onPress={() => Alert.alert("เพิ่มห้องเรียนสำหรับครู")}>
            <Text style={{ color: "red" }}>
              <AntDesign name='pluscircle' size={20} color='red' />
              เพิ่มห้องเรียน
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return <></>;
    }
  };

  const openSubjectDetail = (course) => {
    navigation.navigate("คอร์สเรียน", { course: course });
  };

  const renderCourseCard = (course) => {
    return (

      
      <View style={{margin:"1%"}}> 
        <TouchableOpacity style={styles.btn} onPress={() => openSubjectDetail(course)}>
        <Image style={styles.img} source={require("../assets/wan.png")} />
        <Text > {"\n"} </Text>
        <Text style={styles.title}> {"\n"} {course.id} {"\n"}{"\n"} {course.title} </Text>
        <Text > {"\n"} </Text>
        </TouchableOpacity>
      </View>
   
    );
  };

  return (
    <ScrollView style={styles.container}>
      {Courses.map((course) => {
        return renderCourseCard(course);
      })}

      {shouldRenderCreateCourseButton()}
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
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    opacity: 0.5,
    
  },

  title: {
    fontSize: 10,
    opacity: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    backgroundColor: "white",
    color: "black",
    width: "70%",
    height:150,
    padding:"5%",
    borderRadius:10,
    left:0,

   
  },


  btn: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  btn2: {
    height: "30%",
    width: "100%",
    borderColor: "red",
    borderWidth: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    bottom: "20%",
    padding:"5%",
    borderRadius: 10,
  },
});
export default MyCourseScreen;
