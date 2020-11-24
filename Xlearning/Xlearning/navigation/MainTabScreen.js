import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import MyCourseScreen from "../screens/MyCourseScreen";
import RoomScreen from "../screens/RoomScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DetailSubjectScreen from "../screens/DetailSubjectScreen";
import AddCouseScreen from "../screens/AddCouseScreen";
import CreateQRScreen from "../screens/CreateQRScreen";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName='Home' activeColor='#fff'>
    <Tab.Screen
      name='Home'
      component={HomeStackScreen}
      options={{
        tabBarLabel: "หน้าหลัก",
        tabBarColor: "#6495ED",
        tabBarIcon: ({ color }) => <Icon name='ios-home' color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name='mycourse'
      component={MyCourseScreenStackScreen}
      options={{
        tabBarLabel: "ห้องเรียนของฉัน",
        tabBarColor: "#1f65ff",
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name='google-classroom' color={color} size={26} />,
      }}
    />

    <Tab.Screen
      name='attend'
      component={RoomScreenStackScreen}
      options={{
        tabBarLabel: "เช็กรายชื่อ",
        tabBarColor: "#694fad",
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name='checkbox-marked' color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name='message'
      component={ChatScreenStackScreen}
      options={{
        tabBarLabel: "ข้อความ",
        tabBarColor: "#d02860",
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name='message-text-outline' color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name='profile'
      component={ProfileScreenStackScreen}
      options={{
        tabBarLabel: "ฉัน",
        tabBarColor: "#1f65ff",
        tabBarIcon: ({ color }) => <AntDesign name='user' size={26} color='#fff' />,
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#6495ED",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name='Home'
      component={HomeScreen}
      options={{
        title: "Xlearning",
        headerLeft: () => (
          <Icon.Button
            name='ios-menu'
            size={25}
            backgroundColor='#6495ED'
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const ProfileScreenStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1f65ff",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name='ฉัน'
      component={ProfileScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name='ios-menu'
            size={25}
            backgroundColor='#1f65ff'
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);
const MyCourseScreenStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1f65ff",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name='ห้องเรียนของฉัน'
      component={MyCourseScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name='ios-menu'
            size={25}
            backgroundColor='#1f65ff'
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);
const RoomScreenStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1f65ff",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name='เช็กรายชื่อ'
      component={CreateQRScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name='ios-menu'
            size={25}
            backgroundColor='#1f65ff'
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);
const ChatScreenStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#1f65ff",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name='ข้อความ'
      component={ChatScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name='ios-menu'
            size={25}
            backgroundColor='#1f65ff'
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);
