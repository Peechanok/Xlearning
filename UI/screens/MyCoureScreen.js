import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

// import MyNavigator  from './navigation/MyNavigator';

const MyCoureScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Image style={styles.img} source={require("../assets/wan.png")} />
          <Text style={styles.text}>หลักการอินเทอร์เน็ต</Text>
        </TouchableOpacity>
        <Text style={styles.title}>06016334 WIRELESS NETWORK TECHNOLOGY</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Image style={styles.img} source={require("../assets/hid.jpg")} />
          <Text style={styles.text}>
            หลักการออกแบบโดยใช้ผู้ใช้เป็นศูนย์กลาง
          </Text>
        </TouchableOpacity>
        <Text style={styles.title}>06016310 HUMAN INTERFACE DESIGN</Text>
      </View>

      {/* test */}

      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Image style={styles.img} source={require("../assets/wan.png")} />
          <Text style={styles.text}>หลักการอินเทอร์เน็ต</Text>
        </TouchableOpacity>
        <Text style={styles.title}>06016334 WIRELESS NETWORK TECHNOLOGY</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Image style={styles.img} source={require("../assets/hid.jpg")} />
          <Text style={styles.text}>
            หลักการออกแบบโดยใช้ผู้ใช้เป็นศูนย์กลาง
          </Text>
        </TouchableOpacity>
        <Text style={styles.title}>06016310 HUMAN INTERFACE DESIGN</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => Alert.alert("เพิ่มห้องเรียนสำหรับครู")}
        >
          <Text style={{ color: "red" }}>
            <AntDesign name='pluscircle' size={20} color='red' />
            เพิ่มห้องเรียน
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
export default MyCoureScreen;
