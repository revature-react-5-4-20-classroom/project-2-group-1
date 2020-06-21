import * as React from 'react';
import { Movie } from '../models/Movie';
import { getAllMovies, getAllUserLists } from '../api/movieClient';
import { MoviePreview } from '../components/moviePreview';
import { Table, Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import { ExampleActorsBackend } from '../components/ExampleActorsBackend';
import { IState } from '../redux/reducers';
import { moviesUpdateActionMapper, userListsActionMapper } from "../redux/action-mappers";
import { connect } from 'react-redux';
import { UserListsComponent } from '../components/UserListsComponent';

//! For Redux
const mapStateToPropsUserLists = (state: IState) => {
  const { userLists } = state.moviesStore;
  return {
    userLists,
  }
}
const mapDispatchToProps = {
  moviesUpdateActionMapper,
  userListsActionMapper
}

const UserListsComponentReduxContainer = connect(mapStateToPropsUserLists, mapDispatchToProps)(UserListsComponent);
//! End of Redux

export class MoviesListPage extends React.Component<any, any> {

  render() {
    const movies = this.props.movies;
    return (
      <Container fluid>
        <Jumbotron>
          {/* This will take some work to make it a dynamic title so come back later if you have time */}
          <h1 className="display-3 center">{`Movies`}</h1>
        </Jumbotron>
        {/* Make this a sticky component */}
        <UserListsComponentReduxContainer></UserListsComponentReduxContainer>
        <Row>
            {movies.map((movieObj: Movie)=>{
                //return <img key={movieObj.movieId} src={movieObj.poster}/>
                return (
                <Col className="myColumn myPadding" key={movieObj.movieId} xl={6}>
                    <MoviePreview onClick={()=>{this.props.history.push(`title/${movieObj.title}`)}} movie={movieObj} deleteButton={false}/>
                </Col>)
            })}
        </Row>
      </Container>
    )
  }
}

