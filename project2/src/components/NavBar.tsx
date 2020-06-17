import react from 'react';
import reactdom from 'react-dom';
import { Nav, NavItem, Button, Form, FormGroup, Label, Input, Navbar, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { User } from '../models/Users';


interface INavBarProps
{
    loggedInUser: User | null,
    toggleTheme: ()=> void
}

export class NavBar extends React.Component<INavBarProps, any>
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
                    <NavItem>
                        <NavLink to="/movies/list" className="nav-link" activeClassName="active">Movies</NavLink>
                    </NavItem>
                    <NavItem tag={()=>{return <Button to="/home"  hidden={!this.props.loggedInUser} /*onClick={this.props.logoutUser}*/ color="secondary" outline>Logout</Button>}} />
                    <button onClick={()=>this.props.toggleTheme()}>Toggle Theme</button>
                </Nav>
                <Form inline className="mr-sm-2">
                    <UncontrolledDropdown>
                         <DropdownToggle >
                            Search Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Movies
                            </DropdownItem>
                            <DropdownItem>
                            Actors
                            </DropdownItem>
                            <DropdownItem>
                            Directors
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
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