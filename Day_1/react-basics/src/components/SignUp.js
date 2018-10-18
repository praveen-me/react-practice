import React, {Component} from "react";
import {InputField} from './InputField';
import "./../scss/normalize.scss";
import "./../scss/form.scss";

export default class SignUp extends Component {
  render() {
    const elm = 
    <div className="form_container SignUp">
      <h1 className="form_head">SignUp</h1>
      <form className="form">
        <InputField placeholder="Full Name" />
        <InputField placeholder="Mobile number or Email" />
        <InputField placeholder="User name" />
        <InputField placeholder="Password" />
        <button className="form_btn utils_style">Signup</button>
        <div className="center">
          <a href='#'
           className="form_link">Login with facebook</a>
        </div>
      </form>
    </div>
    return(
      elm
    )
  }
} 