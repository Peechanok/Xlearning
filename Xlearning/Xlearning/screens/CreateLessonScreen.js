import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, TouchableOpacity ,Alert , ScrollView, TextInput} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

//   const [value, onChangeText] = React.setState("");


export default class CreateLessonScreen extends React.Component {
    
    state = {title: "",
            des:"" }

    titleChangeHandler = (value) => {
        this.setState({ title: value })
      }

    desChangeHandler = (value) => {
        this.setState({ des: value })
      }

    _pickDocument = async () => {
          let result = await DocumentPicker.getDocumentAsync({});
            alert(result.uri);
             console.log(result);
      };
  
  
    render() {
      

      return (
        <ScrollView style={styles.container}>


                <View style={styles.box}>
                    <TextInput
                    style={styles.search} 
                    placeholder="หัวข้อบทเรียน"
                    value={this.state.title}
                    onChangeText={this.titleChangeHandler}
                  
                    />

                <Text>{"\n"}</Text>
               
                        <TextInput 
                       value={this.state.des}
                        onChangeText={this.desChangeHandler}
                        placeholder="รายละเอียดของบทเรียน"
                        multiline = {true}
                        numberOfLines = {20}
                        style={styles.textArea}


                        />
                <Text>{"\n"}</Text>
                <Text style = {{ borderColor: "black", borderBottomWidth:2}}>เอกสารประกอบการเรียน</Text>
                <Text>{"\n"}</Text>
            <View>
                    <TouchableOpacity onPress={this._pickDocument}  style = {styles.btn_flie}>
                            <Text  style = {{color:"white"}}>
                         <AntDesign name="addfile" size={24} color="white" /> {"\t"}  Upload Document</Text>
                    </TouchableOpacity>
           

          
                     <TouchableOpacity onPress={this._pickDocument}  style = {styles.btn_flie}>
                            <Text  style = {{color:"white"}}>
                         <AntDesign name="addfile" size={24} color="white" /> {"\t"}  Upload Document</Text>
                    </TouchableOpacity>

    
            </View>
                    <Text>{"\n"}</Text>
            <View>
                    <TouchableOpacity
                    style = {styles.confirm}
                    onPress={() => Alert.alert('Simple Button pressed')}>     
                        <Text style = {{color:"white"}}><Ionicons name="ios-add-circle" size={24} color="white" /> {"\t"}เพิ่มบทเรียน</Text>
                        </TouchableOpacity>
                    </View>
        </View>

        </ScrollView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
      flexDirection: "column",
      backgroundColor: "#F5F5F5",
    },
   

    btn_flie: {
        height: 50,
        width: 250,
        borderRadius:10,
        backgroundColor: "blue",
        borderWidth: 2,
        textAlign: "center",
        color:"white", 
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "white", 
        flexDirection: "row",
        
        
      },
      box: {
        padding:"5%",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        
      },
      search : {
        height: 50,
        width: "100%", 
       
        textAlign: "center",
        color:"#6495ED",
        borderColor: "blue", 
        borderBottomWidth:2,
      },

    
      textArea: {
        borderColor: "blue",
        borderWidth: 2,
        padding: 5,
        width: "100%",
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        color:"#6495ED",
      },

      confirm: {
        height: 70,
        width: 350,
        borderRadius:10,
        // backgroundColor: "#FFD700",
        backgroundColor: "orange",
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        bottom:0,
        
        
      },
     
  });


