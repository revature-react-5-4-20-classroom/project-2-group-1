import React from 'react';

export class MovieFormPage extends React.Component<any, any> {
  render() {
    return (
      <div className="page" id="movieFormPage">
        <h1>Movie Form Page</h1>
        <p>This is the page that users are sent to when they want to add a movie to the database (because they are trying to add a movie to a list)</p>
      </div>
    )
  }
}