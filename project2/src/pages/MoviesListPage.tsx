import * as React from 'react';
import { Movie } from '../models/Movie';
import { getAllMovies } from '../api/movieClient';
import { MoviePreview } from '../components/moviePreview';
import { Table, Container } from 'reactstrap';
import { ExampleActorsBackend } from '../components/ExampleActorsBackend';
import { IState } from '../redux/reducers';
import { moviesUpdateActionMapper, userListIdActionMapper } from "../redux/action-mappers";
import { GenericPage } from './GenericPage';
import { connect } from 'react-redux';

//! For Redux
const mapStateToProps = (state: IState) => {
  return {
    ...state.moviesStore,
    // ...state.player
  }
}

const mapDispatchToProps = {
  userListIdActionMapper,
  moviesUpdateActionMapper
}
// Connect is a higher order component. This creates a container that has access to the global state
// We can create other containers depending on the page we are one
const GenericReduxContainer = connect(mapStateToProps, mapDispatchToProps)(GenericPage);
//! End of Redux



export class MoviesListPage extends React.Component<any, any> {
  constructor(props: any)
  {
    super(props)
    this.state = {
      movies: [],
      moviesLoaded: false,

    }
  }

  async componentDidMount()
  {
    try
    {
      this.setState({
        movies: await getAllMovies(),
        moviesLoaded: true
      })
    }
    catch(e)
    {
      throw(e.message);
    }
  }


  render() {
    return (
      <Container>
        <Table striped md={{size: 6}}>
          <tbody>
            {this.state.movies.map((movieObj: Movie)=>{
                //return <img key={movieObj.movieId} src={movieObj.poster}/>
                return <tr><MoviePreview movie={movieObj}/></tr>
            })}
          </tbody>
        </Table>
        <GenericReduxContainer></GenericReduxContainer>
      </Container>
    )
  }
}