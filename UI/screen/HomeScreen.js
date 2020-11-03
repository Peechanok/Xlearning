import React, { useState }  from 'react';
import { StyleSheet, Text, View, Picker, Image, TextInput, Button, TouchableOpacity ,Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


// import MyNavigator  from './navigation/MyNavigator';

const HomeScreen = () => {

  const [selectedValue_year, setSelectedValue_year] = useState("ทั้งหมด");
  const [selectedValue_branch, setSelectedValue_branch] = useState("ทั้งหมด");
  const [value, onChangeText] = React.useState("...");


  return (
    <View style={styles.container}>
      
      <Text>ค้นหา{"\n"}</Text>
      <TextInput
        style={styles.sraech}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />



      {/* เลือกปีที่เรียน */}
      <Text>{"\n"}ชั้นปี{"\n"}</Text>
      <View style={styles.dropdown}>
      <Picker style={styles.dropdown}
        selectedValue={selectedValue_year}
       
        onValueChange={(itemValue, itemIndex) => setSelectedValue_year(itemValue)}>
        <Picker.Item label="ทั้งหมด" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="Others" value="5" />
      </Picker>
     </View>


       {/* เลือกสาขา */}
      <Text>{"\n"}สาขา{"\n"}</Text>
      <View style={styles.dropdown}>
      <Picker style={styles.dropdown}
        selectedValue={selectedValue_branch}
        
        onValueChange={(itemValue, itemIndex) => setSelectedValue_branch(itemValue)}>
        <Picker.Item label="ทั้งหมด" value="0" />
        <Picker.Item label="BSc. Information Technology" value="1" />
        <Picker.Item label="BSc. Business Information Technology " value="2" />
        <Picker.Item label="BSc. Data Science and Business Analytics " value="3" />
      </Picker>
      </View>
      <Text>{"\n"}</Text>
      <Image style={styles.img} source={require("./assets/classroom.png")} />
      
      <View>
      <TouchableOpacity
       style = {styles.btn}
       onPress={() => Alert.alert('Simple Button pressed')}>
            <Text>Search </Text>
         </TouchableOpacity>
      </View>

      
    </View>
  );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
    flexDirection: "column",
    backgroundColor: "#6495ED",
  },
  // text:
  // {fontSize: 15,
  // fontWeight: "bold",
  // 
  // }

  // ,
  sraech : {
    height: 40,
    width: "80%", 
    // borderColor: "blue", 
    borderWidth: 2, 
    borderRadius:50 ,
    textAlign: "center",
    backgroundColor: "white",
    borderWidth: 2,
    color:"#6495ED",

  }
,
  dropdown: {
    width: "80%",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
    color:"#6495ED",    
    backgroundColor: "white",
    borderRadius:50,
    borderWidth: 2,
  
  },
  btn: {
    height: 40,
    width: 300,
    borderRadius:50,
    backgroundColor: "#FFD700",
    
    borderWidth: 2,
    textAlign: "center",
    color:"white", 
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },

  img: {
    position: "absolute",
    width: 100,
    height: 100,
    bottom: 20,
    
  },
});
export default HomeScreen;