import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  ImageBackground,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
const DetailSubjectScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require("../assets/wan.png")} />
      <Image style={styles.teacher} source={require("../assets/sehun.jpg")} />

      <View style={styles.box}>
        <Image
          style={styles.img}
          source={require("../assets/green-slate.jpg")}
        />

        <Text style={styles.text}>
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}ภาพรวมของเทคโนโลยีเครือข่ายไร้สายและการประยุกต์ใช้งาน
          พื้นฐานการส่งผ่านแบบไร้สาย การแพร่กระจายคลื่นวิทยุ เสาอากาศ
          การม๊อดดูเลท การมัลติเพล็กซ์ การควบคุมการเข้าถึงแบบหลายทางพร้อมกัน
          เครือข่ายท้องถิ่นแบบไร้สาย มาตรฐาน IEEE 802.11 การสำรวจสถานที่
          การวางแผน การออกแบบและการปรับใช้เครือข่ายท้องถิ่นแบบไร้สาย
          ความปลอดภัยบนเครือข่ายท้องถิ่นแบบไร้สายและมาตรฐานที่เกี่ยวข้อง
          เครือข่ายส่วนบุคคลแบบไร้สาย เครือข่ายเมืองแบบไร้สาย
          เครือข่ายระยะไกลแบบไร้สาย
          การจัดการและการแก้ปัญหาเครือข่ายไร้สายเบื้องต้น{"\n"}
          {"\n"}
        </Text>
        <Text style={styles.title}>
          06016334 WIRELESS NETWORK TECHNOLOGY{"\n"}
          {"\n"}Teacher : เซฮุนเซนเซย์
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => Alert.alert("ยืนยันการลงทะเบียน")}
        >
          <Text style={{ color: "#32CD32" }}>ลงทะเบียน</Text>
        </TouchableOpacity>

        {/* ถ้าลงทะเบียนแล้วจะขึ้นแต่ปุ่มเข้าห้องเรียน */}
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => Alert.alert("ยืนยันการลงทะเบียน")}
        >
          <Text style={{ color: "#6A5ACD" }}>เข้าห้องเรียน</Text>
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
    height: "15%",
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
    height: "15%",
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
