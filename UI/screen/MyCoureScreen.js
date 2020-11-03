import React, { useState }  from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity ,Alert , ScrollView} from 'react-native';


// import MyNavigator  from './navigation/MyNavigator';

const MyCoureScreen = () => {


  return (
    <ScrollView style={styles.container}>
   
      <Text>{"\n"}{"\n"}ห้องเรียนของฉัน (แปะไว้ก่อน)</Text>

      <View >
    <TouchableOpacity style={styles.btn}
      onPress={() => Alert.alert('Simple Button pressed')}> 
          <Image style={styles.img} source={require("./assets/wan.png")} />
          <Text style={styles.text}>หลักการอินเทอร์เน็ต</Text>
    </TouchableOpacity> 
    <Text style={styles.title}>06016334 WIRELESS NETWORK TECHNOLOGY</Text>
    </View>
    
    <View>
      <TouchableOpacity style={styles.btn}
      onPress={() => Alert.alert('Simple Button pressed')}> 
          <Image style={styles.img} source={require("./assets/hid.jpg")} />
          <Text style={styles.text}>หลักการออกแบบโดยใช้ผู้ใช้เป็นศูนย์กลาง</Text>
    </TouchableOpacity> 
    <Text style={styles.title}>06016310 HUMAN INTERFACE DESIGN</Text>
    </View>

{/* test */}

<View >
    <TouchableOpacity style={styles.btn}
      onPress={() => Alert.alert('Simple Button pressed')}> 
          <Image style={styles.img} source={require("./assets/wan.png")} />
          <Text style={styles.text}>หลักการอินเทอร์เน็ต</Text>
    </TouchableOpacity> 
    <Text style={styles.title}>06016334 WIRELESS NETWORK TECHNOLOGY</Text>
    </View>
    
    <View>
      <TouchableOpacity style={styles.btn}
      onPress={() => Alert.alert('Simple Button pressed')}> 
          <Image style={styles.img} source={require("./assets/hid.jpg")} />
          <Text style={styles.text}>หลักการออกแบบโดยใช้ผู้ใช้เป็นศูนย์กลาง</Text>
    </TouchableOpacity> 
    <Text style={styles.title}>06016310 HUMAN INTERFACE DESIGN</Text>
    </View>


    
    </ScrollView>
  );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#6495ED",
    padding:"10%",

  },
  img: {
    
    position: "absolute",
    // height: 200,
    // width:  300,
    height: "70%",
    width:  "100%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50,
    backgroundColor:"black",
    opacity: 0.5,
    // padding: 10,
    borderWidth: 3,

  },

  text: {
    color:"white",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:14,
    textAlign: "center",
    padding:"30%",

  },
  title: {
    
    ...StyleSheet.absoluteFill,
    fontSize:10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor:"white",
    color:"black",
    borderWidth: 2,
    padding:"2%",
    width: "70%",
    height:"20%",
    top: "10%",
    left: "15%",
    right:"15%",

  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",

      },
   


});
export default MyCoureScreen;