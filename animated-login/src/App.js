import React, { useState } from "react";
import Form from "./Form";

function App() {
  const [currentOpenSlide, setCurrentOpenSlide] = useState("signup");

  const handleClick = slide => setCurrentOpenSlide(slide);

  return (
    <>
      <div
        className={`container ${currentOpenSlide === "signin" &&
          "right-panel-active"}`}
        id="container">
        <div className="form-container sign-up-container">
          <Form title="Create Account" isSignUpForm handleClick={handleClick}>
            or use your email for registration
          </Form>
        </div>
        <div className="form-container sign-in-container">
          <Form title="Sign In" isSignUpForm={false} handleClick={handleClick}>
            or use your account
          </Form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleClick("signup")}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => handleClick("signin")}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
