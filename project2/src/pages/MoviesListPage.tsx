import * as React from 'react';
import { Movie } from '../models/Movie';
import { getAllMovies } from '../api/movieClient';
import { moviesClickActionMapper } from '../redux/action-mappers';
import { MoviePreview } from '../components/moviePreview';
import { Table, Container } from 'reactstrap';



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
      </Container>
    )
  }
}