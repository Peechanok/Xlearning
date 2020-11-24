import React, { useState }  from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity ,Alert , ScrollView, ImageBackground} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
const RoomScreen = () => {


  return (
    <ScrollView style={styles.container}>
           
        <Image style={styles.logo} source={require("../assets/hid.jpg")} />
        <Text style={styles.title}>06016334 WIRELESS NETWORK TECHNOLOGY{"\n"}{"\n"}Teacher : เซฮุนเซนเซย์</Text>

    
         <View style={styles.box}>
                <Text style={styles.ch}>{"\n"}CH 1: Introducing Human Interface Design {"\n"}</Text>
                
                <Text style={styles.text}><FontAwesome name="circle" size={12} color="black" /> {"\t"}
                Chapter 1 Lecture SlidesAnnotatable{"\n"}</Text>
                
                <Text style={styles.text}><FontAwesome name="circle" size={12} color="black" /> {"\t"}
                Chapter 1: Exercise 1Interactive Content{"\n"} </Text>

                <Text style={styles.text}><FontAwesome name="circle" size={12} color="black" /> {"\t"}
                Assignment-3.1 : สร้าง prototype ไทยชนะ{"\n"} </Text>
        </View>


        <View style={styles.box}>
                <Text style={styles.ch}>{"\n"}CH 2: prototype Design {"\n"}</Text>
                
                <Text style={styles.text}><FontAwesome name="circle" size={12} color="black" /> {"\t"}
                Chapter 2 Lecture SlidesAnnotatable{"\n"}</Text>
                
                <Text style={styles.text}><FontAwesome name="circle" size={12} color="black" /> {"\t"}
                Chapter 2: Exercise 1Interactive Content{"\n"} </Text>

                <Text style={styles.text}><FontAwesome name="circle" size={12} color="black" /> {"\t"}
                Assignment-4.1 : สร้าง prototype ไทยชนะ{"\n"} </Text>
        </View>

        <View style={styles.box}>
                <Text style={styles.ch}>{"\n"}CH 2: prototype Design {"\n"}</Text>
                
                <Text style={styles.text}><FontAwesome name="circle" size={12} color="black" /> {"\t"}
                Chapter 2 Lecture SlidesAnnotatable{"\n"}</Text>
                
                <Text style={styles.text}><FontAwesome name="circle" size={12} color="black" /> {"\t"}
                Chapter 2: Exercise 1Interactive Content{"\n"} </Text>

                <Text style={styles.text}><FontAwesome name="circle" size={12} color="black" /> {"\t"}
                Assignment-4.1 : สร้าง prototype ไทยชนะ{"\n"} </Text>
        </View>
    </ScrollView>
  );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F5F5F5",    

  },

  box:{

    alignItems: 'center',
    justifyContent: 'center',
    fontSize:14,
    backgroundColor:"white",
    borderRadius:10,
    margin:10,
    borderBottomWidth: 2,
    borderBottomColor:"black",
    padding:10,
  },

  text:{
    color:"blue",
  }
,
  ch: {
    color:"black",
    fontWeight:"bold",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:14,
    textAlign: "center",
    // padding:"10%",
    
    

  },
  // title: {
  //   flex: 1,
  //   ...StyleSheet.absoluteFill,
  //   fontSize:10,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   textAlign: "center",
  //   fontWeight: "bold",
  //   backgroundColor:"gold",
  //   color:"black",
  //   borderWidth: 2,
  //   padding:"2%",
  //   width: "85%",
  //   height:80,
  //   top: 120,
  //   left: "8%",
  //   right:"8%",
   

  // },

  title: {
    flex: 1,
    ...StyleSheet.absoluteFill,
    fontSize:10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor:"gold",
    color:"black",
    borderWidth: 2,
    padding:"2%",
    width: "100%",
    height:"8%",
    top: "10%",
  
   

  },
  
  logo: {
    position: "relative",
    width: "100%",
    height: 200,
    bottom: 10,
    
  },

});
export default RoomScreen;