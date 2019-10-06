import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

const Form = ({ title, isSignUpForm, handleClick, children }) => {
  return (
    <form action="#">
      <h1>{title}</h1>
      <div className="social-container">
        <a href="#" className="social">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#" className="social">
          <FontAwesomeIcon icon={faGooglePlusG} />
        </a>
        <a href="#" className="social">
          <FontAwesomeIcon icon={faLinkedinIn} />
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
