import React from 'react';

export class LandingPage extends React.Component<any, any> {
  render() {
    return (
      <div className="page" id="landingPage">
        <h1>Landing Page</h1>
        <p>This page is where the user is directed upon logging in or they they go to if they are a guest.</p>
      </div>
    )
  }
}