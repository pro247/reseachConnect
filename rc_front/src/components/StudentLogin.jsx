// eslint-disable-next-line no-unused-vars
import React from "react";
import "../StudentLogin.css";

const LoginIllustration = () => {
  return (
    <img
      src="./assets/4957136-4957136-1.svg"
      alt="Illustration"
      className="login-illustration"
    />
  );
};

const LoginTitle = () => {
  return (
    <h1 className="login-title">
      Student
      <br />
      <span>Login</span>
    </h1>
  );
};

const EmailInputField = () => {
  return (
    <div className="input-field">
      <label>Email</label>
      <input type="email" placeholder="Value" />
    </div>
  );
};

const PasswordInputField = () => {
  return (
    <div className="input-field">
      <label>Password</label>
      <input type="password" placeholder="Value" />
    </div>
  );
};

const SignInButton = () => {
  return <button className="sign-in-button">Sign In</button>;
};

const ForgotPasswordLink = () => {
  return (
    <a href="#" className="forgot-password-link">
      Forgot password?
    </a>
  );
};

const StudentLogin = () => {
  return (
    <div className="student-login-container">
      <LoginIllustration />
      <LoginTitle />
      <div className="login-form">
        <EmailInputField />
        <PasswordInputField />
        <SignInButton />
        <ForgotPasswordLink />
      </div>
    </div>
  );
};

export default StudentLogin;
