import React, {Component} from "react";
import LogIn from './LogIn';
import "./../scss/form.scss"

export default class SignUp extends Component {
  render() {
    const elm = 
    <div className="form_container SignUp">
      <h1 className="form_head">SignUp</h1>
      <form className="form">
        <input type="text" className="form_field utils_style" placeholder="Mobile number or Email" />
        <input type="text" className="form_field utils_style" placeholder="Full name" />
        <input type="text" className="form_field utils_style" placeholder="User name" />
        <input type="text" className="form_field utils_style" placeholder="Password" />
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