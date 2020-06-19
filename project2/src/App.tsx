import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider, connect } from "react-redux";
import { store } from "./redux/store";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { MovieFormPage } from "./pages/MovieFormPage";
import { MoviePage } from "./pages/MoviePage";
import { MoviesListFormPage } from "./pages/MoviesListFormPage";
import { MoviesListPage } from "./pages/MoviesListPage";
import {NavBar} from "./components/NavBar"
import { Nav } from "reactstrap";
import {ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme} from "./styling/theme"
import {GlobalStyles} from "./styling/global"
import { toggle } from "./components/toggleComponent";
import { User } from "./models/Users";




export class App extends React.Component<any, any> {

  constructor(props: any)
  {
    super(props)
    this.state=
    {
      loggedInUser: null,
      theme: 'light'
    }
  }

  updateLoggedInuser = (user: User) =>{
    this.setState({
      loggedInUser: user
    });
  };

  logoutUser =()=>{
    this.setState({
      loggedInUser: null, 
    });
  };

  toggleTheme = () =>{
    if(this.state.theme === 'light')
    {
      this.setState({
        theme: 'dark'
      })
    }
    else
    {
      this.setState({
        theme: 'light'
      })
    }
  };

  render() {
    return (
      <ThemeProvider theme = {this.state.theme ==='light' ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <div>
          <Provider store={store}>
            <Router>
              <NavBar 
                logoutUser={this.logoutUser}
                loggedInUser = {this.state.loggedInUser}
                toggleTheme={this.toggleTheme}
              />

              <Switch>
                <Route path="/login" render={(props) => 
                  <LoginPage loggedInUser={this.state.loggedInUser} updateUser={this.updateLoggedInuser}
                    {...props}
                  />}
                />

                <Route path="/movie-form" render={(props) => 
                  <MovieFormPage
                    {...props}
                  />}
                />
                 {/* We will use list id from our db */}
                 <Route path="/movies/list" render={(props) => 
                  <MoviesListPage
                    {...props}
                  />}
                />
                {/* We will use title from our db */}
                <Route path="/movies/title/:title" render={(props) => 
                  <MoviePage 
                    {...props}
                  />}
                />

                <Route path="/movies-form" render={(props) => 
                  <MoviesListFormPage
                    {...props}
                  />}
                />

                {/* Everything is thrown here */}
                <Route path="/" render={(props) => 
                  <LandingPage
                    {...props}
                  />}
                />
              </Switch>


            </Router>
          </Provider>
        </div>
      </ThemeProvider>
    )
  }
}
