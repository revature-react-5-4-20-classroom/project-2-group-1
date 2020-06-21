import React from 'react';
import { getAllUserLists, getUserListByListId, getAllMovies, addMovieToUserList, getUserListBy } from '../api/movieClient';
import { Button } from 'reactstrap';
import { Movie } from '../models/Movie';
import { User } from '../models/Users';


interface IAddMovieComponentProps {
  userListsActionMapper: (userLists: any[]) => any;
  moviesUpdateActionMapper: (movies: Movie[]) => any;
  movies: Movie[];
  loggedInUser: User;
}

export class AddMovieComponent extends React.Component<IAddMovieComponentProps, any> {
  constructor(props: IAddMovieComponentProps) {
    super(props);
    this.state = {
      value: "0",
      allMovies: [],
      listMovieIds: [],
      userListId: 0,
      movieAdded: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount()
  {
    try 
    {
      let allMovies = await getAllMovies();
      this.setState({allMovies});
      // I need to set the global movies to the current users list
      let { movies, userListId } = await getUserListBy(this.props.loggedInUser.userId);
      console.log("this is what movies looks like here in addmoviecomponent")
      console.log(movies);
      this.props.moviesUpdateActionMapper(movies);
      this.setState({userListId})
      // Then I need all of those ids
      // If he tries to add a movie from that list then don't do it
      let listMovieIds = movies.map((movie: Movie) => movie.movieId);
      this.setState({listMovieIds});
    }
    catch(e)
    {
      throw(e.message);
    }
  }

  handleChange(e: any) {
    this.setState({value: e.target.value});
  }

  async handleSubmit(e: any) {
    e.preventDefault();

    // console.log(this.state.listMovieIds.includes(parseInt(this.state.value)))
    if (this.state.value == 0) {
      return;
    }
    let movieIds = this.state.listMovieIds;
    let movieId = this.state.value;
    let isDuplicate = movieIds.includes(parseInt(movieId));
    if (!isDuplicate) {
      console.log("adding movie");
      let numberMoviesAdded = 0;
      try 
      {
        numberMoviesAdded = await addMovieToUserList(this.state.value, this.state.userListId);
        if (numberMoviesAdded !== 0) this.setState({movieAdded: true})
      }
      catch(e) 
      {
        throw(e.message);
      }
      if (numberMoviesAdded === 0) return;
      try 
      {
        let { movies } = await getUserListByListId(this.state.userListId);
        console.log(movies);
        this.props.moviesUpdateActionMapper(movies);
      }
      catch(e)
      {
        throw(e.message);
      }
      //TODO Later
      // console.log("just before the timeout")
      // setTimeout(() => this.setState({numberMoviesDeleted: 0}), 50000)
      // console.log("after the timeout");
    }
  }

  



  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
          {`Available Movies: `}
          <select name="listId" value={this.state.value} onChange={this.handleChange}>
            <option value={0}>Select A Movie To Add</option>
            {this.state.allMovies.map((movie: Movie) => 
              <option 
              key={movie.movieId}
              value={movie.movieId}
              >
                {movie.title}
              </option>)}
          </select>
          </label>
          <input type="submit"/>
        </form>
      </>
    )
  }
}