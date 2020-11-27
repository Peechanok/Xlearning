import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import Courses from "../model/courses";

const FilterCourseScreen = (props) => {
  const auth = useSelector((state) => state.auth);
  const { filters, navigation } = props;

  const openSubjectDetail = (course) => {
    navigation.navigate("คอร์สเรียน", { course: course });
  };

  const renderCourseCard = () => {
    let courses = Courses;

    console.log(filters);

    if (filters.title) {
      courses = courses.filter((item) => {
        return item.startsWith(filters.title);
      });
    }

    if (filters.year && filters.year > 0) {
      courses = courses.filter((item) => {
        return item.year == filters.year;
      });

      console.log(courses);
    }

    if (filters.branch && filters.branch > 0) {
      courses = courses.filter((item) => {
        return item.branch == filters.branch;
      });
    }

    return Courses.map((course, index) => {
      return (
        <View key={index}>
          <TouchableOpacity style={styles.btn} onPress={() => openSubjectDetail(course)}>
            <Image style={styles.img} source={require("../assets/wan.png")} />
            <Text style={styles.text}>{course.shortDescription}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>
            {course.id} {course.title}
          </Text>
        </View>
      );
    });
  };

  return <ScrollView style={styles.container}>{renderCourseCard()}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "#6495ED",
    backgroundColor: "#F5F5F5",
    padding: "10%",
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
    backgroundColor: "black",
    opacity: 0.5,
    // padding: 10,
    borderWidth: 3,
  },

  text: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    textAlign: "center",
    padding: "30%",
  },
  title: {
    ...StyleSheet.absoluteFill,
    fontSize: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "white",
    color: "black",
    borderWidth: 2,
    padding: "2%",
    // width: "70%",
    height: "20%",
    top: "10%",
    left: "15%",
    right: "15%",
  },

  btn: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  btn2: {
    height: "20%",
    width: "80%",
    borderColor: "red",
    borderWidth: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    bottom: "20%",
    margin: "10%",
    borderRadius: 10,
  },
});
export default FilterCourseScreen;
