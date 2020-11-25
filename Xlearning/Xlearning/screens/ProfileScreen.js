import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Platform,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../store/actions/UserAction";

// import exampleImage from '../assets/sehun.jpg';

// const exampleImageUri = Image.resolveAssetSource(exampleImage).uri

const ProfileScreen = (navigation) => {
  // const [image, setImage] = useState( <Image source={require("../assets/sehun.jpg")} style={styles.image} resizeMode="center"></Image>);
  const [image, setImage] = useState(null);

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [data, setData] = React.useState({
    fullname: auth.user.fullname,
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const handleFullnameChange = (val) => {
    if (val) {
      setData({
        ...data,
        fullname: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        fullname: "",
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  // รูป

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
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const saveProfileData = () => {
    const profile = { ...auth.user, fullname: data.fullname, imageUri: image != null ? image : "" };
    dispatch(updateUserProfile(profile));
    Alert.alert("อัพเดตข้อมูลสำเร็จ");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View style={styles.titleBar}>
                    <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
                    <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>  มี กดกลับดีไหมนะ
                </View> */}

        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            {image && (
              <Image
                source={{
                  uri:
                    image != null
                      ? image
                      : auth.user.imageUri != null && auth.user.imageUri != ""
                      ? auth.user.imageUri
                      : "https://api.adorable.io/avatars/50/abott@adorable.png",
                }}
                style={styles.image}
                resizeMode='center'
              />
            )}
            {/* <Image source={require("../assets/sehun.jpg")} style={styles.image} resizeMode="center"></Image> */}
          </View>

          <View style={styles.active}></View>
          {/* มีสถานะไหม */}
          <TouchableOpacity style={styles.add} onPress={pickImage}>
            <Ionicons name='ios-add' size={48} color='#DFD8C8' style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
          </TouchableOpacity>
        </View>
        <SafeAreaView style={styles.container}>
          <ScrollView style={{ padding: 10 }}>
            <Text style={styles.text_footer}>ID</Text>
            <View style={styles.action}>
              <FontAwesome name='id-card-o' color='#05375a' size={20} />
              <TextInput
                placeholder='กรอกรหัสประจำตัว..'
                style={styles.textInput}
                autoCapitalize='none'
                value={auth.user.id.toString()}
                editable={false}
              />
              {/* {data.check_textInputChange ? (
                <Animatable.View animation='bounceIn'>
                  <Feather name='check-circle' color='green' size={20} />
                </Animatable.View>
              ) : null} */}
            </View>

            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
              <FontAwesome name='user-o' color='#05375a' size={20} />
              <TextInput
                placeholder='กรอก Username..'
                style={styles.textInput}
                autoCapitalize='none'
                value={auth.user.username}
                editable={false}
              />
              {/* {data.check_textInputChange ? (
                <Animatable.View animation='bounceIn'>
                  <Feather name='check-circle' color='green' size={20} />
                </Animatable.View>
              ) : null} */}
            </View>

            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 35,
                },
              ]}
            >
              ชื่อ-นามสกุล
            </Text>
            <View style={styles.action}>
              <AntDesign name='adduser' size={20} color='#05375a' />
              <TextInput
                placeholder='กรอกชื่อของคุณ..'
                style={styles.textInput}
                autoCapitalize='none'
                defaultValue={auth.user.fullname}
                onChangeText={(val) => handleFullnameChange(val)}
              />
              {data.check_textInputChange ? (
                <Animatable.View animation='bounceIn'>
                  <Feather name='check-circle' color='green' size={20} />
                </Animatable.View>
              ) : null}
            </View>

            <View style={styles.button}>
              <TouchableOpacity style={[styles.signIn, { backgroundColor: "#6495ED" }]} onPress={saveProfileData}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  บันทึก
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: "100%",

    borderColor: "#ccc",
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
