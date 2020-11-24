export const RETRIEVE_TOKEN = "RETRIEVE_TOKEN";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";

export const retrieveToken = (token) => {
  return { type: RETRIEVE_TOKEN, token: token };
};

export const login = (username, password) => {
  return { type: LOGIN, username: username, password: password };
};

export const logout = () => {
  return { type: LOGOUT };
};

export const register = (user) => {
  return { type: REGISTER, user: user };
};
