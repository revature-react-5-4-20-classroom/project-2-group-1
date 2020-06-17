import React from 'react';
import { ExampleActorsBackend } from '../components/ExampleActorsBackend';


export class LandingPage extends React.Component<any, any> {
  render() {
    return (
      <div className="page" id="landingPage">
        <h1>Landing Page</h1>
        <p>This page is where the user is directed upon logging in or they they go to if they are a guest.</p>
        <ExampleActorsBackend></ExampleActorsBackend>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6JnN1DmbqoU"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
      </div>
    )
  }
}