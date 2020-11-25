/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useCallback, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";

import { DrawerContent } from "./navigation/DrawerContent";

import MainTabScreen from "./navigation/MainTabScreen";
import SupportScreen from "./screens/SupportScreen";
import SettingsScreen from "./screens/SettingsScreen";

// import { AuthContext } from "./components/context";

import RootStackScreen from "./navigation/RootStackScreen";

import AsyncStorage from "@react-native-community/async-storage";

import { useSelector, useDispatch, Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import themeReducer from "./store/reducers/ThemeReducer";
import loginReducer from "./store/reducers/LoginReducer";
import { retrieveToken } from "./store/actions/LoginAction";

const Drawer = createDrawerNavigator();

const AppWrapper = () => {
  const rootReducer = combineReducers({
    auth: loginReducer,
    theme: themeReducer,
  });

  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const auth = useSelector((state) => state.auth);
  const isDarkTheme = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      text: "#333333",
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      text: "#ffffff",
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const handleRetriveToken = useCallback((token) => {
    // console.log('user token: ', userToken);
    dispatch(retrieveToken(token));
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      try {
        let userToken = null;
        userToken = await AsyncStorage.getItem("userToken");
        handleRetriveToken(userToken ?? "");
      } catch (e) {
        console.log(e);
      }
    }, 1000);
  }, [handleRetriveToken]);

  if (auth.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        {auth.token !== null ? (
          <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name='HomeDrawer' component={MainTabScreen} />
            <Drawer.Screen name='SupportScreen' component={SupportScreen} />
            <Drawer.Screen name='SettingsScreen' component={SettingsScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default AppWrapper;
