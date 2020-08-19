import React, { useState, useReducer } from "react";
import LoginComponent from "../Component/LoginComponent";
import * as Yup from "yup";
import apiHelper from "../apis/apiHelper";
import { useDispatch, useSelector } from "react-redux";
import LoginReducer, { initialState } from "../Reducer/LoginReducer";
import DashBoardContainer from "../Container/DashBoardContainer";
import {
  setUsernameError,
  setPasswordError,
  setLogin,
  setUserDetails,
} from "../Reducer/ActionDispatch";
import { Redirect } from "react-router-dom";

const LoginContainer = () => {
  const username = useSelector((state) => state.username);
  const password = useSelector((state) => state.password);
  const usernameError = useSelector((state) => state.usernameError);
  const passwordError = useSelector((state) => state.passwordError);
  const login = useSelector((state) => state.login);
  const userdetails = useSelector((state) => state.userdetails);
  const dispatch = useDispatch();

  const loginDetails = { username, password };

  const validationSchema = Yup.object().shape({
    username: Yup.string().email().required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });

  const validateData = () => {
    validationSchema
      .validate(loginDetails, { abortEarly: false })
      .then(() => {
        dispatch(setLogin(true));
        console.log("login", login);
        apiHelper("post", "https://api.taiga.io/api/v1/auth", {
          username: username,
          password: password,
          type: "normal",
        }).then(({ data }) => {
          dispatch(setUserDetails(data));
          console.log(data);
        });
      })
      .catch((error) => {
        error.inner.forEach((ele) => {
          if (ele.path === "username") {
            dispatch(setUsernameError(ele.message));
            console.log(usernameError);
          }
          if (ele.path === "password") dispatch(setPasswordError(ele.message));
        });
      });
  };

  if (userdetails.auth_token) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <LoginComponent
      username={username}
      password={password}
      usernameError={usernameError}
      passwordError={passwordError}
      login={login}
      dispatch={dispatch}
      validateData={validateData}
    />
  );
};

export default LoginContainer;
