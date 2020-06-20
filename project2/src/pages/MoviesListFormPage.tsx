import React from 'react';
import { Movie } from '../models/Movie';
import { User } from '../models/Users';
import { Form, FormGroup, Label, Col, Input, Button, Toast, ToastHeader, ToastBody, Jumbotron, Row } from 'reactstrap';
import { getUserListBy } from '../api/movieClient';
import { MoviePreview } from '../components/moviePreview';


interface IMoviesListFormPageProps {
  moviesUpdateActionMapper: (movies: Movie[]) => any;
  movies: Movie[];
  loggedInUser: User;
}

interface IMoviesListFormPageState {
  movies: Movie[];
}

export class MoviesListFormPage extends React.Component <IMoviesListFormPageProps, IMoviesListFormPageState> {
  constructor(props: IMoviesListFormPageProps) {
    super(props);
    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    try 
    {
      let { movies } = await getUserListBy(this.props.loggedInUser.userId);
      this.props.moviesUpdateActionMapper(movies);
    }
    catch(e)
    {
      throw(e.message);
    }

  }
  
  async removeMovieFromList(e: any) {
    let movieId = parseInt(e.currentTarget.value);
    // Remove the movie from the list
    try 
    {
      let { movies, listName, listOwner, userListId } = await getUserListBy(this.props.loggedInUser.userId);
      
    }
    catch(e)
    {
      throw(e.message);
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
  }



  render() {
    const movies = this.props.movies;
    return (
      <div className="page" id="moviesListFormPage">
        <Jumbotron>
          {/* This will take some work to make it a dynamic title so come back later if you have time */}
          <h1 className="display-3 center">{`${this.props.loggedInUser.username}'s Movies List`}</h1>
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
                      movie={movieObj} 
                      onClick={this.removeMovieFromList}
                    />
                  </Col>
                )
            })}
        </Row>

      </div>
    )
  }
}