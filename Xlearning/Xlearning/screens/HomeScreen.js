import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

// import MyNavigator  from './navigation/MyNavigator';

const HomeScreen = () => {
  const [selectedValue_year, setSelectedValue_year] = useState();
  const [selectedValue_branch, setSelectedValue_branch] = useState();
  const [value, onChangeText] = React.useState("I'm look for ...");

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require("../assets/digital-learning3.jpg")} />

      <View style={styles.box}>
        <TextInput style={styles.search} onChangeText={(text) => onChangeText(text)} value={value} />

        {/* เลือกปีที่เรียน */}

        <Text>
          {"\n"}ชั้นปี{"\n"}
        </Text>
        <View style={styles.dropdown}>
          <Picker
            style={styles.dropdown}
            selectedValue={selectedValue_year}
            onValueChange={(itemValue, itemIndex) => setSelectedValue_year(itemValue)}
          >
            <Picker.Item label='ทั้งหมด' value='0' />
            <Picker.Item label='1' value='1' />
            <Picker.Item label='2' value='2' />
            <Picker.Item label='3' value='3' />
            <Picker.Item label='4' value='4' />
            <Picker.Item label='Others' value='5' />
          </Picker>
        </View>

        {/* เลือกสาขา */}
        <Text>
          {"\n"}สาขา{"\n"}
        </Text>
        <View style={styles.dropdown}>
          <Picker
            style={styles.dropdown}
            selectedValue={selectedValue_branch}
            onValueChange={(itemValue, itemIndex) => setSelectedValue_branch(itemValue)}
          >
            <Picker.Item label='ทั้งหมด' value='0' />
            <Picker.Item label='BSc. Information Technology' value='1' />
            <Picker.Item label='BSc. Business Information Technology ' value='2' />
            <Picker.Item label='BSc. Data Science and Business Analytics ' value='3' />
          </Picker>
        </View>
        <Text>{"\n"}</Text>

        <View>
          <TouchableOpacity style={styles.confirm} onPress={() => Alert.alert("Simple Button pressed")}>
            <AntDesign name='search1' size={24} color='#FFD700' />
            <Text> {"\t"}ค้นหา</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F5F5F5",
    // backgroundColor: "#E6E6FA",
    // padding:"5%",
  },
  box: {
    padding: "5%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  search: {
    height: 50,
    width: "100%",
    borderColor: "blue",
    textAlign: "center",
    // borderWidth: 2,
    // borderWidth: 2,
    // borderRadius:10 ,
    color: "#6495ED",
    borderBottomWidth: 2,
  },
  dropdown: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#6495ED",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "blue",
  },
  confirm: {
    height: 50,
    width: 250,
    borderRadius: 10,
    // backgroundColor: "#FFD700",
    backgroundColor: "white",
    borderWidth: 2,
    textAlign: "center",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFD700",
    flexDirection: "row",
  },

  logo: {
    position: "relative",
    width: "100%",
    height: 200,
    bottom: 10,
  },
});
export default HomeScreen;
