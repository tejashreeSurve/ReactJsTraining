export const setUsername = (data) => ({
  type: "SET_USERNAME",
  payload: data,
});

export const setPassword = (data) => ({
  type: "SET_PASSWORD",
  payload: data,
});

export const setUsernameError = (data) => ({
  type: "SET_USERNAMEERROR",
  payload: data,
});

export const setPasswordError = (data) => ({
  type: "SET_PASSWORDERROR",
  payload: data,
});

export const setLogin = (data) => ({
  type: "SET_LOGIN",
  payload: data,
});

export const setUserDetails = (data) => ({
  type: "SET_USERDETAILS",
  payload: data,
});
