import React, { useState, useEffect } from "react";
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  Picker,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const AddCouseScreen = () => {
  const [image, setImage] = useState(null);
  const [value, onChangeText] = React.useState("");
  const [des, onChangedes] = React.useState("");

  const [selectedValue_year, setSelectedValue_year] = useState();
  const [selectedValue_branch, setSelectedValue_branch] = useState();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <TextInput
          style={styles.search}
          placeholder='ชื่อห้องเรียน'
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />

        <Text>{"\n"}</Text>

        <TextInput
          onChangeText={(text) => onChangedes(text)}
          value={des}
          placeholder='รายละเอียดของห้องเรียน'
          multiline={true}
          numberOfLines={20}
          style={styles.textArea}
        />

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

        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity style={styles.btn_img} onPress={pickImage}>
            <MaterialIcons name='add-a-photo' size={24} color='white' />
            <Text style={{ color: "white" }}> {"\t"}เลือกรูปปกวิชา</Text>
          </TouchableOpacity>
          <Text>{"\n"}</Text>
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                borderColor: "black",
                borderWidth: 2,
                width: 400,
                height: 200,
              }}
            />
          )}
        </View>

        <Text> {"\t"}</Text>

        <View>
          <TouchableOpacity style={styles.confirm} onPress={() => Alert.alert("Simple Button pressed")}>
            <Text style={{ color: "white" }}>
              <Ionicons name='ios-add-circle' size={24} color='white' />
              {"\t"} {"\t"}เพิ่มข้อมูลห้องเรียน
            </Text>
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

  textArea: {
    borderColor: "blue",
    borderWidth: 2,
    padding: 5,
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#6495ED",
  },

  search: {
    height: 50,
    width: "100%",
    borderColor: "blue",
    textAlign: "center",
    color: "#6495ED",
    borderBottomWidth: 2,
  },
  confirm: {
    height: 70,
    width: 350,
    borderRadius: 10,
    // backgroundColor: "#FFD700",
    backgroundColor: "green",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    bottom: 0,
  },
  btn_img: {
    height: 50,
    width: 200,
    borderRadius: 10,
    // backgroundColor: "#FFD700",
    backgroundColor: "black",
    borderWidth: 2,
    textAlign: "center",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    flexDirection: "row",
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
});
export default AddCouseScreen;
