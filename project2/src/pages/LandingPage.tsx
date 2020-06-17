import React from 'react';
import { ExampleActorsBackend } from '../components/ExampleActorsBackend';
import { IState } from '../redux/reducers';
import { moviesUpdateActionMapper, moviesClickActionMapper } from "../redux/action-mappers";
import { GenericPage } from './GenericPage';
import { connect } from 'react-redux';

//! For Redux
const mapStateToProps = (state: IState) => {
  return {
    ...state.movies,
    // ...state.player
  }
}

const mapDispatchToProps = {
  moviesClickActionMapper,
  moviesUpdateActionMapper
}
// Connect is a higher order component. This creates a container that has access to the global state
// We can create other containers depending on the page we are one
const GenericReduxContainer = connect(mapStateToProps, mapDispatchToProps)(GenericPage);
//! End of Redux

export class LandingPage extends React.Component<any, any> {
  render() {
    return (
      <div className="page" id="landingPage">
        <h1>Landing Page</h1>
        <p>This page is where the user is directed upon logging in or they they go to if they are a guest.</p>
        <ExampleActorsBackend></ExampleActorsBackend>
        <GenericPage onClick={moviesClickActionMapper}></GenericPage>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6JnN1DmbqoU"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      </div>
    )
  }
}