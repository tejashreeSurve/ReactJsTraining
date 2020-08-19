import React, { useState, useReducer } from "react";
import LoginComponent from "../Component/LoginComponent";
import * as Yup from "yup";
import apiHelper from "../apis/apiHelper";
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
  const [state, dispatch] = useReducer(LoginReducer, initialState);

  const validationSchema = Yup.object().shape({
    username: Yup.string().email().required("Required"),
    password: Yup.string()
      .required("Required")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });

  const validateData = () => {
    validationSchema
      .validate(
        { username: state.username, password: state.password },
        { abortEarly: false }
      )
      .then(() => {
        dispatch(setLogin(true));
        console.log("login", state.login);
        apiHelper("post", "https://api.taiga.io/api/v1/auth", {
          username: state.username,
          password: state.password,
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
            console.log(state.usernameError);
          }
          if (ele.path === "password") dispatch(setPasswordError(ele.message));
        });
      });
  };

  if (state.userdetails.auth_token) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <LoginComponent
      state={state}
      dispatch={dispatch}
      validateData={validateData}
    />
  );
};

export default LoginContainer;
