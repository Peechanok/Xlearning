import React  from 'react';
import { StyleSheet, Text, View , ScrollView, Image} from 'react-native';

const ChatScreen = () => {
  
    return (
      <ScrollView style={styles.container}>
          
          <Text>Welcome to Chat!!!</Text>

       



           </ScrollView>
           
           ); 
      
      }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      textAlign: "center",
      flexDirection: "column",
      backgroundColor: "#6495ED",
      top:"5%",
     
    },



});

export default ChatScreen;