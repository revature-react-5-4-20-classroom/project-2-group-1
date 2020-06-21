import React from 'react';
import { Movie } from '../models/Movie';
import { User } from '../models/Users';
import { Form, FormGroup, Label, Col, Input, Button, Toast, ToastHeader, ToastBody, Jumbotron, Row } from 'reactstrap';
import { getUserListBy, deleteMovieFromUserList, addMovieToUserList, getAllMovies } from '../api/movieClient';
import { MoviePreview } from '../components/moviePreview';
import { DBToast } from '../components/DBToast';
import { UserListsComponent } from '../components/UserListsComponent';
import { AddMovieComponent } from '../components/AddMovieComponent';
import { IState } from '../redux/reducers';
import { moviesUpdateActionMapper, userListsActionMapper } from "../redux/action-mappers";
import { connect } from 'react-redux';

//! For Redux
const mapStateToPropsUserLists = (state: IState) => {
  const { movies } = state.moviesStore;
  return {
    movies,
  }
}
const mapDispatchToProps = {
  moviesUpdateActionMapper,
  userListsActionMapper
}

const AddMovieComponentReduxContainer = connect(mapStateToPropsUserLists, mapDispatchToProps)(AddMovieComponent);
//! End of Redux

interface IMoviesListFormPageProps {
  moviesUpdateActionMapper: (movies: Movie[]) => any;
  movies: Movie[];
  loggedInUser: User;
  history: any
}

interface IMoviesListFormPageState {
  allMovies: Movie[];
  listName: string;
  userListId: number;
  numberMoviesDeleted: number;
  numberMoviesAdded: number;
}

export class MoviesListFormPage extends React.Component <IMoviesListFormPageProps, IMoviesListFormPageState> {
  constructor(props: IMoviesListFormPageProps) {
    super(props);
    this.state = {
      allMovies: [],
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
    try 
    {
      let allMovies = await getAllMovies();
      this.setState({allMovies})
    }
    catch(e)
    {
      throw(e.message);
    }

  }
  
  removeMovieFromList = async (e: any) => {
    console.log("am i here?")
    let movieId = parseInt(e.currentTarget.value);
    let numberMoviesDeleted = 0;
    console.log(this.state)
    // Remove the movie from the list
    try 
    {
      numberMoviesDeleted = await deleteMovieFromUserList(movieId, this.state.userListId);
      console.log(numberMoviesDeleted);
      if (numberMoviesDeleted != this.state.numberMoviesDeleted) this.setState({numberMoviesDeleted});
      console.log("Should notify them now")
      // Notify them how many were deleted
    }
    catch(e)
    {
      throw(e.message);
    }
    console.log(numberMoviesDeleted);
    if (numberMoviesDeleted === 0) return;
    // Update the movies
    console.log("before the try block")
    try 
    {
      let { movies } = await getUserListBy(this.props.loggedInUser.userId);
      console.log(movies);
      this.props.moviesUpdateActionMapper(movies);
    }
    catch(e)
    {
      throw(e.message);
    }
    console.log("just before the timeout")
    setTimeout(() => this.setState({numberMoviesDeleted: 0}), 5000)
    console.log("after the timeout");
  }



  render() {
    const movies = this.props.movies;
    return (
      <div className="page" id="moviesListFormPage">
        <Jumbotron>
          {/* This will take some work to make it a dynamic title so come back later if you have time */}
          <h1 className="display-3 center">{`Your Movie List:`}</h1>
          <h1 className="display-3 center">{`${this.state.listName}`}</h1>
        </Jumbotron>
        <AddMovieComponentReduxContainer loggedInUser={this.props.loggedInUser}></AddMovieComponentReduxContainer>
        <Row>
            {movies.length === 0 ? "" : movies.map((movieObj: Movie)=>{
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
                      onDelete={this.removeMovieFromList}
                      onClick={()=>{this.props.history.push(`title/${movieObj.title}`)}}
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