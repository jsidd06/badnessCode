import React from "react";
import { Form, FormGroup, Input, Label, Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Container>
      <Form>
        <h3>SignUp Form</h3>
        <FormGroup>
          <Label>Name</Label>
          <Input type="name" name="name" placeholder="Enter your Name" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" name="email" placeholder="Enter your Email" />
        </FormGroup>
        <FormGroup>
          <Label>Phone</Label>
          <Input
            type="number"
            name="phone"
            placeholder="Enter your Phone Number"
          />
        </FormGroup>
        <FormGroup>
          <input type="radio" value="Male" name="gender" /> Male
          <input
            type="radio"
            value="Female"
            name="gender"
            style={{ marginLeft: 5 }}
          />{" "}
          Female
          <input
            type="radio"
            value="Other"
            name="gender"
            style={{ marginLeft: 5 }}
          />{" "}
          Other
        </FormGroup>
        <FormGroup>
          <Label>Address</Label>
          <Input type="text" name="address" placeholder="Enter your Address" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your Password"
          />
        </FormGroup>
        <div>
          <Button color="primary">Signup Now</Button>
          <Link style={{ marginLeft: 5 }} className="btn btn-success" to="/">
            Login Now
          </Link>
        </div>
      </Form>
    </Container>
  );
}

export default SignUp;
