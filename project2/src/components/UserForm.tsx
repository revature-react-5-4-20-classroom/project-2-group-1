import React from 'react'
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import { User } from '../models/Users';
import { submitUser } from '../api/movieClient';


export class UserForm extends React.Component<any,any>
{
    constructor(props: any)
    {
        super(props);
        this.state={
            username: "",
            password: "",
            email: ""
        }
    }

    submitNewUser = async(submitEvent: any) =>
    {
        submitEvent.preventDefault();
        try
        {
            const user = new User(0, this.state.username, this.state.password, this.state.email)
            await submitUser(user)
        }
        catch(e)
        {
            throw(e.message)
        }
    }

    clearForm=()=>{
        this.setState({
            username: "",
            password: "",
            email: ""
        })
    }
    bindInputChangeTostate = (changeEvent: any) =>
    {
        //@ts-ignore
        this.setState({[changeEvent.currentTarget.name]: changeEvent.currentTarget.value})
    }

    render()
    {
        return(
            <Container>
                <Form md={{ size: 8, offset: 1}} onSubmit={this.submitNewUser}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input
                            onChange={this.bindInputChangeTostate}
                            value={this.state.username}
                            type="text"
                            name="username"
                            id="username"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            onChange={this.bindInputChangeTostate}
                            value={this.state.password}
                            type="password"
                            name="password"
                            id="password"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            onChange={this.bindInputChangeTostate}
                            value={this.state.email}
                            type="text"
                            name="email"
                            id="email"
                            required
                        />
                    </FormGroup>
                    <Button>Register</Button>
                </Form>
            </Container>
                
        )
    }

}

