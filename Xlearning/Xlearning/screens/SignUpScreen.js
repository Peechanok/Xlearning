import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Picker,
} from "react-native";
import * as Animatable from "react-native-animatable";
// import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { AntDesign } from "@expo/vector-icons";
const SignInScreen = ({ navigation }) => {
  const [selectedValue_role, setSelectedValue_role] = useState();
  const [data, setData] = React.useState({
    username: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
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

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle='light-content' />
      <View style={styles.header}>
        <Text style={styles.text_header}>ยังไม่มีบัญชีใช่ไหม? ลงทะเบียนเลย!</Text>
      </View>
      <Animatable.View animation='fadeInUpBig' style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>ID</Text>
          <View style={styles.action}>
            <FontAwesome name='id-card-o' color='#05375a' size={20} />
            <TextInput
              placeholder='กรอกรหัสประจำตัว..'
              style={styles.textInput}
              autoCapitalize='none'
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation='bounceIn'>
                <Feather name='check-circle' color='green' size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={styles.text_footer}>ชื่อ-นามสกุล</Text>
          <View style={styles.action}>
            <AntDesign name='adduser' size={20} color='#05375a' />
            <TextInput
              placeholder='กรอกชื่อของคุณ..'
              style={styles.textInput}
              autoCapitalize='none'
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation='bounceIn'>
                <Feather name='check-circle' color='green' size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Username
          </Text>

          <View style={styles.action}>
            <FontAwesome name='user-o' color='#05375a' size={20} />
            <TextInput
              placeholder='กรอก Username..'
              style={styles.textInput}
              autoCapitalize='none'
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation='bounceIn'>
                <Feather name='check-circle' color='green' size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={styles.text_footer}>Password</Text>

          <View style={styles.action}>
            <Feather name='lock' color='#05375a' size={20} />
            <TextInput
              placeholder='กรอก Password..'
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize='none'
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name='eye-off' color='grey' size={20} />
              ) : (
                <Feather name='eye' color='grey' size={20} />
              )}
            </TouchableOpacity>
          </View>

          {/* <Text style={[styles.text_footer, {
                  marginTop: 35
              }]}>Confirm Password</Text>
              <View style={styles.action}>
                  <Feather 
                      name="lock"
                      color="#05375a"
                      size={20}
                  />
                  <TextInput 
                      placeholder="Confirm Your Password"
                      secureTextEntry={data.confirm_secureTextEntry ? true : false}
                      style={styles.textInput}
                      autoCapitalize="none"
                      onChangeText={(val) => handleConfirmPasswordChange(val)}
                  />
                  <TouchableOpacity
                      onPress={updateConfirmSecureTextEntry}
                  >
                      {data.secureTextEntry ? 
                      <Feather 
                          name="eye-off"
                          color="grey"
                          size={20}
                      />
                      :
                      <Feather 
                          name="eye"
                          color="grey"
                          size={20}
                      />
                      }
                  </TouchableOpacity>
              </View> */}

          <Text style={styles.text_footer}>อาชีพ</Text>
          <View style={styles.action}>
            <AntDesign name='team' size={20} color='#05375a' />

            <View style={styles.dropdown}>
              <Picker
                style={styles.dropdown}
                selectedValue={selectedValue_role}
                onValueChange={(itemValue, itemIndex) => setSelectedValue_role(itemValue)}
              >
                <Picker.Item label='คุณคือใคร?' value='0' />
                <Picker.Item label=' ครู' value='teacher' />
                <Picker.Item label='นักเรียน' value='student' />
              </Picker>
              {/* <DropDownPicker
      items={[
          {label: 'Teacher', value: 'teacher'},
          {label: 'Student', value: 'student'},
      ]}
    
      defaultIndex={0}
      containerStyle={{height: 40 , width : 300,}}
      
      onChangeItem={item => console.log(item.label, item.value)}
  /> */}
            </View>
          </View>

          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>คุณได้จะยอมรับ</Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}> เงื่อนไขการให้บริการ</Text>
            <Text style={styles.color_textPrivate}> และ</Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}> นโยบายความเป็นส่วนตัว</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={[styles.signIn, { backgroundColor: "#6495ED" }]} onPress={() => {}}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#fff",
                  },
                ]}
              >
                ลงทะเบียน
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                styles.signIn,
                {
                  borderColor: "#FFD700",
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#FFD700",
                  },
                ]}
              >
                เข้าสู่ระบบ
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6495ED",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
    dropdown: {
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        color:"#6495ED",    
        backgroundColor: "white",
        borderRadius:10,
        borderWidth: 2,
        borderColor: "white", 
    
      },                       
  footer: {
    flex: Platform.OS === "ios" ? 3 : 5,
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
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
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
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  color_textPrivate: {
    color: "grey",
  },
});
