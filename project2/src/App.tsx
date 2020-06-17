import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider, connect } from "react-redux";
import { store } from "./redux/store";
import { IState } from "./redux/reducers";
import { GenericPage } from "./pages/GenericPage";
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

//! For Redux
const mapStateToProps = (state: IState) => {
  return {
    ...state.movies,
    //add player state as well
    // ...state.player
  }
}
const mapDispatchToProps = {
  // listClickActionMapper,
  // userClickActionMapper
}
// Connect is a higher order component. This creates a container that has access to the global state
// We can create other containers depending on the page we are one
const GenericReduxContainer = connect(mapStateToProps, mapDispatchToProps)(GenericPage);
//! End of Redux


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
                loggedInUser = {this.state.loggedInUser}
                toggleTheme={this.toggleTheme}
              />

              <Switch>
                <Route path="/login" render={(props) => 
                  <LoginPage
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
                <Route path="/movie/:title" render={(props) => 
                  <MoviePage 
                    {...props}
                  />}
                />

                <Route path="/movies-form" render={(props) => 
                  <MoviesListFormPage
                    {...props}
                  />}
                />

                {/* This is how we will use the store */}
                <Route path="/generic" render={(props) => 
                  <GenericReduxContainer 
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
