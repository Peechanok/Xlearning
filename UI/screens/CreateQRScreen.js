import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TimePicker from "react-native-simple-time-picker";

const CreateQRScreen = () => {
  // const [value, onChangeText] = React.useState("กำหนดเวลา");
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text>{"\n"}</Text>

        <Text style={{ fontWeight: "bold" }}>
          กำหนดเวลา ( {selectedHours}:{selectedMinutes} ) {"\n"}
        </Text>
        <View style={styles.time}>
          <TimePicker
            style={styles.time}
            selectedHours={selectedHours}
            //initial Hourse value
            selectedMinutes={selectedMinutes}
            //initial Minutes value
            onChange={(hours, minutes) => {
              setSelectedHours(hours);
              setSelectedMinutes(minutes);
            }}
          />
        </View>
        <Text>{"\n"}</Text>

        <View>
          <TouchableOpacity
            style={styles.confirm}
            onPress={() => Alert.alert("Simple Button pressed")}
          >
            <MaterialCommunityIcons
              name='qrcode-scan'
              size={24}
              color='white'
            />

            <Text style={{ color: "white" }}> {"\t"}Create QR</Text>
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
    // backgroundColor: "#6495ED",
    backgroundColor: "#F5F5F5",
    padding: "10%",
  },

  box: {
    padding: "5%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  confirm: {
    height: 50,
    width: 150,
    borderRadius: 10,
    // backgroundColor: "#FFD700",
    backgroundColor: "blue",
    borderWidth: 2,
    textAlign: "center",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    flexDirection: "row",
  },
  time: {
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
export default CreateQRScreen;
