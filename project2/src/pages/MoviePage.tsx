import React from 'react';



export class MoviePage extends React.Component<any, any> {

  // constructor(props: any)
  // {
  //   super(props)
  //   this.state = 
  //   {
  //     movie: []
  //   }
  // }

  // async componentDidMount()
  // {
  //   try
  //   {
  //     this.

  //   }
  //   catch(e)
  //   {
  //     throw(e.message)
  //   }
  // }

  render() {
    return (
      <div className="page" id="moviePage">
        <h1>Movie Page</h1>
        <p>This is the page that show the detail about a movie. It should include all the details and the trailer. {JSON.stringify(this.props)}</p>
      </div>
    )
  }
}