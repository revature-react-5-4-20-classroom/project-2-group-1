import React from 'react';
import { LoginComponent } from '../components/loginComponent ';

export class LoginPage extends React.Component<any, any> {
  render() {
    return (
      <div className="page" id="loginPage">
        <LoginComponent/>
      </div>
    )
  }
}