import React from 'react';
import { User } from '../models/Users';
import {Carousel} from "react-responsive-carousel"
import CarouselComponent from "../components/carouselComponent"
import { getMovieByTitle } from '../api/movieClient';
import { MoviePreview } from '../components/moviePreview';
import { Movie } from '../models/Movie';
import { Container, Row, Form, Input, Col } from 'reactstrap';

interface ILandingPageProps
{
  loggedInUser: User | null
}


export class LandingPage extends React.Component<ILandingPageProps, any> {

  constructor(props: any)
  {
    super(props);
    this.state = 
    {
      movieOne: [],
      movieTwo: [],
      movieThree: []
    }

  }
  async componentDidMount()
  {
    try
    {
      this.setState({
        movieOne: await getMovieByTitle("casablanca"),
        movieTwo: await getMovieByTitle("the godfather"),
        movieThree: await getMovieByTitle("citizen kane")
      })
    }
    catch(e)
    {
      throw(e.message)
    }
  }

  render() {
    return (
      <Container >
        <Row md="auto" className="justify-content-center">
          <div className="justifiy-content-center" id="landingPage">
            <h3>Welcome to FavFilms {this.props.loggedInUser ? this.props.loggedInUser.username : "guest"}! </h3>
            <h3>Here are some of the movies you can find out about on our site!</h3>
            <Form>
              <Row>
                <Col>
                <Input 
                name="suggestion"
                type="text"
                placeholder="Suggest a movie for us to add!"
                value=""
                  />
              </Col>
                <Col><button onClick={(event: any)=>{event.preventDefault()}}>Submit Suggestion</button></Col>
              </Row>
            </Form>
            <CarouselComponent movieOne={this.state.movieOne} movieTwo={this.state.movieTwo} movieThree={this.state.movieThree}/>
          </div>
        </Row>
      </Container>
    )
  }
}