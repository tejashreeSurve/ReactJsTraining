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

const LoginComponent = (props) => {
  const {
    username,
    password,
    setUsername,
    setPassword,
    usernameError,
    passwordError,
    validateData,
  } = props;
  const setUsernameWraper = (event) => {
    setUsername(event.target.value);
  };
  const setPasswordWraper = (event) => {
    setPassword(event.target.value);
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
                    invalid={usernameError !== null}
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
                    invalid={passwordError !== null}
                  />
                  <FormFeedback>{passwordError}</FormFeedback>
                </FormGroup>
                <Button color="primary" onClick={validateData}>
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
