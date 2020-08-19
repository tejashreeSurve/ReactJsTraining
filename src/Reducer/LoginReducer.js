export const initialState = {
  username: "",
  password: "",
  usernameError: "",
  passwordError: "",
  login: false,
  userdetails: {},
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_USERNAMEERROR":
      return { ...state, usernameError: action.payload };
    case "SET_PASSWORDERROR":
      return { ...state, passwordError: action.payload };
    case "SET_LOGIN":
      return { ...state, login: action.payload };
    case "SET_USERDETAILS":
      return { ...state, userdetails: action.payload };
    default:
      return state;
  }
};

export default LoginReducer;
