import React, {Component} from 'react';
import {InputField} from './InputField';
import "./../scss/normalize.scss";
import "./../scss/form.scss";

export default class LogIn extends Component {
  render() {
    const elm = 
    <div className="form_container SignUp">
      <h1 className="form_head">LOG IN TO YOUR ACCOUNT</h1>
      <form className="form">
        <InputField placeholder="User name" />
        <InputField placeholder="Password" />
        <button className="form_btn utils_style">Signin</button>
        <div className="center">
          <a href="#" className="form_link">Forget Password?</a>
        </div>
      </form>
    </div>
    return (
       elm
    );
  }
}
