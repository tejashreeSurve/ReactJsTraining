import React, { useState, useReducer } from "react";
import LoginComponent from "../Component/LoginComponent";
import * as Yup from "yup";
import apiHelper from "../apis/apiHelper";
const LoginContainer = () => {
  // const initialState = {
  //   username: "",
  //   password: "",
  //   usernameError: "",
  //   passwordError: "",
  // };

  // function reducer(state, action) {
  //   switch (action.type) {
  //     case "username":
  //       return { username: state.username };
  //     case "password":
  //       return { password: state.password };
  //     case "usernameError":
  //       return { usernameError: usernameError };
  //     case "passwordError":
  //       return { password: state.password };
  //     default:
  //       throw new Error();
  //   }
  // }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const validationSchema = Yup.object().shape({
    username: Yup.string().email().required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });

  const validateData = () => {
    validationSchema
      .validate({ username, password }, { abortEarly: false })
      .then(() => {
        apiHelper("post", "https://api.taiga.io/api/v1/auth", {
          username,
          password,
          type: "normal",
        }).then((response) => {
          console.log(response);
        });
      })
      .catch((error) => {
        error.inner.forEach((ele) => {
          if (ele.path === "username") setUsernameError(ele.message);
          if (ele.path === "password") setPasswordError(ele.message);
          console.log(ele.path, ele.message);
        });
      });
  };

  return (
    <LoginComponent
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      usernameError={usernameError}
      passwordError={passwordError}
      validateData={validateData}
    />
  );
};

export default LoginContainer;
