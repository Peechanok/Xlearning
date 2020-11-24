import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";
import TimePicker from "react-native-simple-time-picker";
import { useSelector } from "react-redux";

const CreateQRScreen = () => {
  // const [value, onChangeText] = React.useState("กำหนดเวลา");
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [hasCameraPermission, setCameraPermission] = useState();

  const auth = useSelector((state) => state.auth);

  const requestCameraPermission = useCallback(async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setCameraPermission(status === "granted");
  });

  useEffect(() => {
    requestCameraPermission();
  }, [requestCameraPermission]);

  const handleBarcodeRead = (evt) => {
    Alert.alert(evt.data);
  };

  const renderQRTemplateForRole = () => {
    if (auth.user.role === "teacher") {
      return (
        <>
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
            <TouchableOpacity style={styles.confirm} onPress={() => Alert.alert("สร้าง QR Code")}>
              <MaterialCommunityIcons name='qrcode-scan' size={24} color='white' />
              <Text style={{ color: "white" }}> {"\t"}Create QR</Text>
            </TouchableOpacity>
          </View>
        </>
      );
    } else {
      return (
        <>
          <Text style={{ fontWeight: "bold" }}>สแกน QR Code {"\n"}</Text>
          <View>
            {hasCameraPermission === null ? (
              <Text>Requesting for camera permission</Text>
            ) : hasCameraPermission === false ? (
              <Text style={{ color: "#fff" }}>Camera permission is not granted</Text>
            ) : (
              <BarCodeScanner
                // onBarCodeRead={this._handleBarCodeRead}
                onBarCodeScanned={handleBarcodeRead}
                style={{
                  height: Dimensions.get("window").height / 1.75,
                  width: Dimensions.get("window").width,
                }}
              />
            )}
          </View>
        </>
      );
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>{renderQRTemplateForRole()}</View>
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
