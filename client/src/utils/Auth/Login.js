import React from "react";
import { Form, FormGroup, Input, Label, Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container>
      <Form>
        <h3>Login Form</h3>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" name="email" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="enter your password"
          />
        </FormGroup>
        <div>
          <Button color="primary">Login Now</Button>
          <Link
            style={{ marginLeft: 5 }}
            className="btn btn-success"
            to="/signUp"
          >
            Signup Now
          </Link>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
