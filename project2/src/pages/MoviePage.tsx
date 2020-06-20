import React from 'react';
import { getMovieByTitle, getAllMovies } from '../api/movieClient';
import { Container, Row, Table, Col } from 'reactstrap';
import { Movie } from '../models/Movie';
import { MoviePreview } from '../components/moviePreview';




export class MoviePage extends React.Component<any, any> {

  constructor(props: any)
  {
    super(props)
    this.state = {
      movies: [],
    }
  }

  async componentDidMount()
  {
    try
    {
      var search = this.props.match.params.title.toLowerCase()
      this.setState({
        movies: await getMovieByTitle(search)
      })
    }
    catch(e)
    {
      throw(e.message)
    }
  }
  render() {
    return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', }} className="page" id="moviePage">
        <Container  sm={{size: 12}}>
          <Row>
            <Col md={{ size: 6, offset: 3 }}>
            <h1>{this.state.movies.title}</h1><br />
            </Col>
          </Row>
          <Row>
            <Col xs="4" md={{offset: 1}}>
            <img src={this.state.movies.poster}/><br />
            </Col>
            <Col xs="4">
            <h3>Plot: {this.state.movies.plot}</h3><br />
            <h3>Director: {this.state.movies.director}</h3>
            <h3>Release date: {this.state.movies.released}</h3>
            <h3>Runtime: {this.state.movies.runtime}</h3>
            </Col>

          </Row>
          <Col md={{ size: 6, offset: 1}}>
            <iframe width="560" height="315" src={this.state.movies.trailer}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </Col>
          <Row>
            <Col md={{ size: 6, offset: 3 }}>
            <h1>Ratings</h1><br />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>IMDB: {this.state.movies.imdbRating}</h3>
              <h3>Metacritic: {this.state.movies.imdbRating}</h3>
            </Col>
            
          </Row>
          <Row>
            <Col>
                {/* {this.state.movies.actors[0].actorName} */}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}