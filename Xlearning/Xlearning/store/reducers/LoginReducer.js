import { Alert } from "react-native";
import { LOGIN, LOGOUT, REGISTER, RETRIEVE_TOKEN } from "../actions/LoginAction";
import { UPDATE_USER_PROFILE, DELETE_USER } from "../actions/UserAction";
import Users from "../../model/users";
import AsyncStorage from "@react-native-community/async-storage";

const initialLoginState = {
  isLoading: true,
  users: Users,
  user: null,
  token: null,
};

const handleRetriveToken = (state, token) => {
  const user = Users.filter((item) => {
    return token == item.token;
  })[0];
  if (user) {
    return {
      ...state,
      user: user,
      token: token,
      isLoading: false,
    };
  } else {
    return {
      ...state,
      isLoading: false,
    };
  }
};

const handleLogin = (state, username, password) => {
  const user = Users.filter((item) => {
    return username == item.username && password == item.password;
  })[0];

  if (user) {
    saveTokenToStorage(user.token);
    return {
      ...state,
      user: user,
      token: user.token,
      isLoading: false,
    };
  } else {
    Alert.alert("ข้อมูลไม่ถูกต้อง!", "Username หรือ Password อาจไม่ถูกต้อง", [{ text: "Okay" }]);
    return { ...state };
  }
};

const saveTokenToStorage = async (token) => {
  try {
    await AsyncStorage.setItem("userToken", token);
  } catch (e) {
    console.log(e);
  }
};

const handleLogout = (state) => {
  return {
    ...state,
    user: null,
    token: null,
    isLoading: false,
  };
};

const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case RETRIEVE_TOKEN:
      const token = action.token;
      return handleRetriveToken(state, token);
    case LOGIN:
      const username = action.username;
      const password = action.password;
      return handleLogin(state, username, password);
    case LOGOUT:
      return handleLogout(state);
    case REGISTER:
      return {
        ...state,
        user: action.user,
        token: action.user.token,
        isLoading: false,
      };
    case UPDATE_USER_PROFILE:
      const id = action.id;
      const profile = action.profile;
      let users = state.users;
      const index = users.findIndex((user) => user.id == id);
      if (index > -1) {
        users[index] = { ...users[index], ...profile, id };
      }
      return {
        ...state,
        users: users,
      };
    case DELETE_USER:
      let deleteUsers = state.users.filter((user) => user.id != action.id);
      return {
        ...state,
        users: deleteUsers,
      };
    default:
      return {
        ...state,
      };
  }
};

export default loginReducer;
