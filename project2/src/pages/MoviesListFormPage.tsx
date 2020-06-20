import React from 'react';
import { Movie } from '../models/Movie';
import { User } from '../models/Users';
import { Form, FormGroup, Label, Col, Input, Button, Toast, ToastHeader, ToastBody, Jumbotron, Row } from 'reactstrap';
import { getUserListBy, deleteMovieFromUserList } from '../api/movieClient';
import { MoviePreview } from '../components/moviePreview';
import { DBToast } from '../components/DBToast';


interface IMoviesListFormPageProps {
  moviesUpdateActionMapper: (movies: Movie[]) => any;
  movies: Movie[];
  loggedInUser: User;
}

interface IMoviesListFormPageState {
  listName: string;
  userListId: number;
  numberMoviesDeleted: number;
  numberMoviesAdded: number;
}

export class MoviesListFormPage extends React.Component <IMoviesListFormPageProps, IMoviesListFormPageState> {
  constructor(props: IMoviesListFormPageProps) {
    super(props);
    this.state = {
      listName: "",
      userListId: 0,
      numberMoviesAdded: 0,
      numberMoviesDeleted: 0,
    }
  }

  async componentDidMount() {
    try 
    {
      let { movies, listName, userListId } = await getUserListBy(this.props.loggedInUser.userId);
      this.props.moviesUpdateActionMapper(movies);
      this.setState({listName, userListId})
    }
    catch(e)
    {
      throw(e.message);
    }

  }
  
  async removeMovieFromList(e: any) {
    let movieId = parseInt(e.currentTarget.value);
    let numberMoviesDeleted = 0;
    // Remove the movie from the list
    try 
    {
      let numberMoviesDeleted = await deleteMovieFromUserList(movieId);
      if (numberMoviesDeleted !== this.state.numberMoviesDeleted) this.setState(numberMoviesDeleted);
      // Notify them how many were deleted
    }
    catch(e)
    {
      throw(e.message);
    }
    if (numberMoviesDeleted === 0) {
      return;
    }
    // Update the movies
    try 
    {
      let { movies } = await getUserListBy(this.props.loggedInUser.userId);
      this.props.moviesUpdateActionMapper(movies);
    }
    catch(e)
    {
      throw(e.message);
    }
    setTimeout(() => this.setState({numberMoviesDeleted: 0}), 5000)
  }



  render() {
    const movies = this.props.movies;
    return (
      <div className="page" id="moviesListFormPage">
        <Jumbotron>
          {/* This will take some work to make it a dynamic title so come back later if you have time */}
          <h1 className="display-3 center">{`Movies List: ${this.state.listName}`}</h1>
        </Jumbotron>
        <Row>
            {movies.map((movieObj: Movie)=>{
                //return <img key={movieObj.movieId} src={movieObj.poster}/>
                return (
                  <Col 
                    className="myColumn myPadding" 
                    key={movieObj.movieId} 
                    xl={6}
                  >
                    <MoviePreview 
                      deleteButton={true}
                      movie={movieObj} 
                      onClick={this.removeMovieFromList}
                    />
                  </Col>
                )
            })}
        </Row>
        <DBToast
          color="#ffcccb"
          numberMoviesAffected={this.state.numberMoviesDeleted}
          action="Deleted"
          moviesLength={this.props.movies.length}
        >
        </DBToast>
      </div>
    )
  }
}