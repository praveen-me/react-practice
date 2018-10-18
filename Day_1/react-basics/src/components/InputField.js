import React, {Component} from "react";

export default class InputField extends Component {
  render() {
    return (
      <input type="text" className="form_field utils_style" placeholder={this.props.placeholder}/>
    );
  }
}