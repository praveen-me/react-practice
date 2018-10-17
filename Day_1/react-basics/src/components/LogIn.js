import React, {Component} from 'react';
import "./../scss/form.scss";

export default class LogIn extends Component {
  render() {
    const elm = 
    <div className="form_container SignUp">
      <h1 className="form_head">LOG IN TO YOUR ACCOUNT</h1>
      <form className="form">
        <input type="text" className="form_field utils_style" placeholder="Phone number, username or email address" />
        <input type="text" className="form_field utils_style" placeholder="Password" />
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
