import React from "react";
import {
  Form,
  Container,
  Card,
  CardBody,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
  CardTitle,
} from "reactstrap";
import "../Css/LoginComponent.css";
import PropsTypes from "prop-types";
import { setUsername, setPassword } from "../Reducer/ActionDispatch";
const LoginComponent = (props) => {
  const {
    username,
    password,
    usernameError,
    passwordError,
    login,
    dispatch,
    validateData,
  } = props;
  const setUsernameWraper = (event) => {
    dispatch(setUsername(event.target.value));
  };
  const setPasswordWraper = (event) => {
    dispatch(setPassword(event.target.value));
  };

  return (
    <Container className="loginContainer">
      <Row>
        <Col>
          <Card>
            <CardBody>
              <CardTitle>
                <h3>Login</h3>
              </CardTitle>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Email"
                    value={username}
                    onChange={setUsernameWraper}
                    invalid={usernameError === "" ? false : true}
                  />
                  <FormFeedback>{usernameError}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Password"
                    value={password}
                    onChange={setPasswordWraper}
                    invalid={passwordError === "" ? false : true}
                  />
                  <FormFeedback>{passwordError}</FormFeedback>
                </FormGroup>
                <Button color="primary" onClick={validateData} disabled={login}>
                  Login
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginComponent;
LoginComponent.prototype = {
  username: PropsTypes.string.isRequired,
  password: PropsTypes.string.isRequired,
  setUsername: PropsTypes.func.isRequired,
  setPassword: PropsTypes.func.isRequired,
};
