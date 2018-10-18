import React, {Component} from 'react';
import Login from './LogIn';
import SignUp from './SignUp';


export default class App extends Component {
  render() {
    return (
       <div>
         <SignUp/>
         {/* <Login/> */}
       </div>
    );
  }
}