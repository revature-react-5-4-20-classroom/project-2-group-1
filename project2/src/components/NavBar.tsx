import react from 'react';
import reactdom from 'react-dom';
import { Nav, NavItem, Button, Form, FormGroup, Label, Input, Navbar } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { User } from '../models/Users';

interface INavBarProps
{
    loggedInUser: User | null
}

export class NavBar extends React.Component<any, any>
{
    render(){
        return(
        <div>
            <Navbar>
                <Nav tabs>
                    <NavItem>
                        <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
                    </NavItem>
                    <NavItem tag={()=>{return <Button to="/home"  hidden={!this.props.loggedInUser} onClick={this.props.logoutUser} color="secondary" outline>Logout</Button>}} />
                </Nav>
                <Form inline className="mr-sm-2">
                    <FormGroup >
                        <Input
                            type="search"
                            placeholder="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </FormGroup>
                </Form>
            </Navbar>
        </div>
        )
    }
}