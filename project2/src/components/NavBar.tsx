import react from 'react';
import reactdom from 'react-dom';
import { Nav, NavItem, Button, Form, FormGroup, Label, Input, Navbar, DropdownMenu, DropdownItem, UncontrolledDropdown, DropdownToggle } from 'reactstrap';
import { Redirect, NavLink } from 'react-router-dom';
import React from 'react';
import { User } from '../models/Users';
import { AnyMxRecord } from 'dns';



interface INavBarProps
{
    //onClick:() =>void;
    logoutUser: () =>void;
    loggedInUser: User | null;
    toggleTheme: ()=> void

}

export class NavBar extends React.Component<INavBarProps, any>
{
    constructor(props: any)
    {
        super(props);
        this.state=
        {
            title: "",
            redirect: false
        }
    }
    setRedirect=()=>{
        this.setState({
            redirect: true
        })
    }
    renderRedirect=(title: string)=>
    {
        if(this.state.redirect)
        {
            this.setState({
                redirect: false
            })
            return <Redirect push to={`movies/title/${title}`}/>
        
        }
    }


    bindInputChangeTostate = (submitEvent: any) =>
    {
        //@ts-ignore
        this.setState({[submitEvent.currentTarget.name]: submitEvent.currentTarget.value})
    }
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
                    {/* I don't want htis to be the perminant location of this list form but I didn't know where to put it */}
                    <NavItem>
                        <NavLink to="/movies/list-form" className="nav-link" activeClassName="active" hidden={!this.props.loggedInUser}>Your List</NavLink>
                    </NavItem>
                    <NavItem tag={()=>{return <Button to="/home"  hidden={!this.props.loggedInUser} onClick={this.props.logoutUser} color="secondary" outline>Logout</Button>}} />
                    <button onClick={()=>this.props.toggleTheme()}>Toggle Theme</button>
                </Nav>
                <Form inline className="mr-sm-2"  >
                    {/* <UncontrolledDropdown>
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
                            Genres
                            </DropdownItem>
                            <DropdownItem>
                            Directors
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown> */}
                    <FormGroup>
                        <Input 
                            onChange={this.bindInputChangeTostate}
                            name="title"
                            type="text"
                            value={this.state.title}
                        />
                        <Button onClick={this.setRedirect}>Blah blah</Button>
                        {this.renderRedirect(this.state.title)}
                    </FormGroup>
                </Form>
            </Navbar>
        </div>
        )
    }
}