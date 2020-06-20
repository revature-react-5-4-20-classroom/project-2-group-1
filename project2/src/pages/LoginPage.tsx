import React from 'react';
import { LoginComponent } from '../components/loginComponent ';
import { UserForm } from '../components/UserForm';
import { Button, Container } from 'reactstrap';

export class LoginPage extends React.Component<any, any> {

  constructor(props:any)
  {
    super(props);
    this.state={
      newUser: true
    }
  }

  changeForm=()=>
  {
    if(this.state.newUser==false)
    {
      this.setState({
        newUser: true
      
      })
    }
    else
    {
      this.setState({
        newUser: false
      })
    }
    
  }
  render() {
    return (
      <div className="page" id="loginPage">
        <Container>
          <Button onClick={this.changeForm}>{this.state.newUser? (<p>Register</p>):<p>login</p>}</Button>
          {this.state.newUser ? 
          (<LoginComponent history ={this.props.history} loggedInUser={this.props.loggedInUser} updateUser={this.props.updateUser}/>) : <UserForm/>}
        </Container>
      </div>
    )
  }
}