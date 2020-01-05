import React, { useState } from "react";
import "./sign-up.styles.scss";
import FormInput from "./../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "./../../redux/user/user.actions";
import { connect } from "react-redux";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCrendentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    await signUpStart({ displayName, email, password });
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setUserCrendentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account </h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="confirmPassword"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
