import React, {Component} from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from '../screens/HomeScreen';
import MyCoureScreen from '../screens/MyCoureScreen';
import DetailSubjectScreen from '../screens/DetailSubjectScreen';
import ChatScreen from '../screens/ChatScreen';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StyleSheet, Image, View, Text} from "react-native";

const count = 99;
const MyTabNavigator = createBottomTabNavigator(
  
  
  {
    หน้าหลัก: { screen: HomeScreen ,
          navigationOptions: {
          tabBarIcon: (tabInfo) => {
                        // return (<Ionicons name="ios-star" size={24} color='red' />);

          return <Image
                            source={require('../assets/house.png')}
                            style={{ height: 30, width: 30 }}
                        />;
      }, },},
    ห้องเรียนของฉัน: { screen: MyCoureScreen,
            navigationOptions: {
            tabBarIcon: (tabInfo) => {
            return <Image
                              source={require('../assets/blackboard.png')}
                              style={{ height: 30, width: 30 }}
                          />;
  }, }, },
    เช็กรายชื่อ: { screen: MyCoureScreen,
            navigationOptions: {
            tabBarIcon: (tabInfo) => {
            return <Image
                        source={require('../assets/videoconference.png')}
                        style={{ height: 30, width: 30 }}
                    />;
}, }, },

    ข้อความ: { screen: ChatScreen, 
            navigationOptions: {
            tabBarIcon: (tabInfo) => {
            if (count > 0 ){
            return <View>  
                    <View style={{ backgroundColor: "yellow", borderRadius:50,alignItems: 'center',justifyContent: 'center',textAlign: "center", right:0}}>
                   <Text style={{ color: 'red', fontSize: 10, fontWeight: 'bold' }}>{count}</Text>
                   </View>

                   <Image
                      source={require('../assets/chat.png')}
                      style={{ height: 30, width: 30 }}
                  />
                   </View>
            }
            else {
              return <Image
                      source={require('../assets/chat.png')}
                      style={{ height: 30, width: 30 }}
                  />
            }
          
                  
                  ;
}, }, },


  },
  {
    tabBarOptions: {
      activeTintColor: "darkblue",
      labelStyle: {
        fontSize: 8,
      },
      style: {
        backgroundColor: "white",
      },
    },
    
  }

  
);

export default createAppContainer(MyTabNavigator);

