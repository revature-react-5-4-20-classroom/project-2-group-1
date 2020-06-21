import React from 'react';
import { Movie } from '../models/Movie';
import { User } from '../models/Users';
import { Form, FormGroup, Label, Col, Input, Button, Toast, ToastHeader, ToastBody, Jumbotron, Row, Container, Tooltip } from 'reactstrap';
import { getUserListBy, deleteMovieFromUserList, addMovieToUserList, getAllMovies, createUserList, deleteUserList } from '../api/movieClient';
import { MoviePreview } from '../components/moviePreview';
import { DBToast } from '../components/DBToast';
import { UserListsComponent } from '../components/UserListsComponent';
import { AddMovieComponent } from '../components/AddMovieComponent';
import { IState } from '../redux/reducers';
import { moviesUpdateActionMapper, userListsActionMapper } from "../redux/action-mappers";
import { connect } from 'react-redux';
import { ChangeListNameComponent } from '../components/ChangeListNameComponent';

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
  [k: string]: any;
  allMovies: Movie[];
  listName: string;
  userListId: number;
  numberMoviesDeleted: number;
  numberMoviesAdded: number;
  hasList: boolean;
  changeListName: boolean;
  tooltipOpen: boolean;
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
      hasList: true,
      changeListName: false,
      tooltipOpen: false,
    }
  }

  async componentDidMount() {
    if (this.props.loggedInUser === null) {
      this.props.history.push("/login");
      return;
    }
    try 
    {
      let userList = await getUserListBy(this.props.loggedInUser.userId);
      if (userList === '') {
        this.setState({hasList: false})
      } else {
        let { movies, listName, userListId } = userList;
        if (this.props.movies !== movies) {
          console.log("Not equal")
          console.log(movies);
          console.log(this.props.movies);
          this.props.moviesUpdateActionMapper(movies);
        }
        this.setState({listName, userListId})
      }
    }
    catch(e)
    {
      console.log(e.message);
      throw(e);
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
    let numberMoviesDeleted = 0;
    // Remove the movie from the list
    let movieId = e.currentTarget.value;
    if (movieId == 0) return;
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

  createList = async (e: any) => {
    e.preventDefault();
    let { userId, username } = this.props.loggedInUser;
    let listName = this.state.listName;
    if (listName.length === 0) return;
    let res = await createUserList(userId, listName, username);
    console.log(res);
    if (res) {
      let userList = await getUserListBy(this.props.loggedInUser.userId);
      let { movies, listName, userListId } = userList;
      this.props.moviesUpdateActionMapper(movies);
      this.setState({listName, userListId, hasList: true})
    }
  }

  deleteList = async (e: any) => {
    let numberDeleted = await deleteUserList(this.state.userListId);
    if (numberDeleted !== 0) {
      this.setState({listName: '', userListId: 0, hasList: false})
    }
  }

  setInputStates = (change: any) => {
    let { name, value } = change.currentTarget;
    this.setState({[name]: value})
  }

  clearError = () => {
    this.setState({
      isError: false,
      errorMessage: '',
    })
  }

  updateListName = (listName: string) => {
    this.setState({changeListName: false, listName});
  }

  changeListName = () => {
    this.setState({changeListName: true})
  }

  toggle = () => this.setState({tooltipOpen: !this.state.tooltipOpen});



  render() {
    const movies = this.props.movies;
    return (
      <div className="page" id="moviesListFormPage">
        {this.state.hasList ? 
        <>
          <Jumbotron>
            {/* This will take some work to make it a dynamic title so come back later if you have time */}
            <Container fluid>
              <h1 className="display-3 center">{`Your Movie List:`}</h1>
              <h1 className="display-3 center" id="userListMovieH1" onClick={this.changeListName}>
                <span style={{textDecoration: "underline"}} id="TooltipExample">{`${this.state.listName}`}</span>
              </h1>
              <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
                Click To Rename Your List
              </Tooltip>

            </Container>
          </Jumbotron>
          {this.state.changeListName ? 
            <ChangeListNameComponent updateListName={this.updateListName} listName={this.state.listName} userListId={this.state.userListId}></ChangeListNameComponent>
            : ""
          }
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
          <Button color="danger" size="lg" onClick={this.deleteList} id="deleteListBtn">DELETE YOUR ENTIRE LIST</Button>
          <DBToast
            color="#ffcccb"
            numberMoviesAffected={this.state.numberMoviesDeleted}
            action="Deleted"
            moviesLength={this.props.movies.length}
          >
          </DBToast>
        </>
        :
        <>
          <Jumbotron>
            {/* This will take some work to make it a dynamic title so come back later if you have time */}
            <h1 className="display-3 center">{`Your Movie List Page`}</h1>
            <h1 className="display-5 center">{`Name Your List and Submit Your Great Collection`}</h1>
          </Jumbotron>
          <Form onSubmit={this.createList}>
            <FormGroup>
              <Label for="listName">Your List Name:</Label>
              <Input type="text" name="listName" id="listName" onChange={this.setInputStates} value={this.state.listName} placeholder="glorious list names only" />
            </FormGroup>
            <Button color="success">THE BUTTON</Button>
          </Form>
        </>
        }
      </div>
    )
  }
}