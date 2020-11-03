import React  from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ChatScreen = () => {
  
    return (
      <View style={styles.container}>
          
          <Text>Welcome to Chat!!!</Text>
          
           </View>); 
      
      }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: "center",
      flexDirection: "column",
      backgroundColor: "#6495ED",
    },});

export default ChatScreen;