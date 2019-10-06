import React from "react";

const Form = ({ title, isSignUpForm, handleClick, children }) => {
  return (
    <form action="#">
      <h1>{title}</h1>
      <div className="social-container">
        <a href="#" className="social">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social">
          <i className="fab fa-google-plus-g"></i>
        </a>
        <a href="#" className="social">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <span>{children}</span>
      {isSignUpForm && <input type="text" placeholder="Name" />}
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      {!isSignUpForm && <a href="#">Forgot your password?</a>}
      <button onClick={() => handleClick(isSignUpForm ? "signup" : "signin")}>
        {isSignUpForm ? "Sign Up" : "Sign In"}
      </button>
    </form>
  );
};

export default Form;
