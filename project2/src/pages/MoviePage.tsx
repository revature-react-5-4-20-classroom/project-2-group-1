import React from 'react';
import { getMovieByTitle, getAllMovies } from '../api/movieClient';
import { Container, Row, Table, Col } from 'reactstrap';
import { Movie } from '../models/Movie';
import { MoviePreview } from '../components/moviePreview';
import { Redirect } from 'react-router-dom';




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
      if(this.state.movies)
      {
        console.log("inside the if")
        return <Redirect to="/home"/>
      }
    }
    catch(e)
    {
      throw(e.message)
    }
  }
  render() {
    return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', }} className="page" id="moviePage">
        <Container  >
          <Row className="justify-content-center" md="auto">
            <Col>
            <h1>{this.state.movies.title}</h1><br />
            </Col>
          </Row>
          <Row className="justify-content-center" md="auto">
            <Col sm="auto">
            <img src={this.state.movies.poster}/><br />
            </Col>
            <Col>
            <h3>Plot: {this.state.movies.plot}</h3><br />
            <h3>Director: {this.state.movies.director}</h3>
            </Col>

          </Row>
          <Row>
          <Col>
            <h3>Trailer in HD!</h3>
            <iframe width="560" height="315" src={this.state.movies.trailer}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          </Col>
          <Col>
          <br />
          <br />
          <br />
          <br />
          <br />
            <h3>Release date: {this.state.movies.released}</h3>
            <h3>Runtime: {this.state.movies.runtime}</h3>
          </Col>
          </Row>
          <Row className="justify-content-center">
            <Col >
            <h3>Ratings</h3>
            <h3>IMDB: {this.state.movies.imdbRating}</h3>
            <h3>Metacritic: {this.state.movies.imdbRating}</h3>
            </Col>
            <Col>
                <h3>Actors:</h3>
                {this.state.movies.actors && this.state.movies.actors.map((actor: string)=>{
                  return (<h3>{actor}</h3>)
                })}
            </Col>
            <Col>
                <h3>Genres:</h3>
                {this.state.movies.genres && this.state.movies.genres.map((genre: string)=>{
                  return (<h3>{genre}</h3>)
                })}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}