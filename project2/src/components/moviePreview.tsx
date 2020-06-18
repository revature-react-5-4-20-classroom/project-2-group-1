import React from "react";
import { Table, Container, Row, Col } from "reactstrap"
import { Movie } from "../models/Movie";

interface IMoviePreivewProps
{
    movie: Movie;
}

export class MoviePreview extends React.Component<IMoviePreivewProps>
{
    
    render()
    {
        return(
            <Container>
                <Row>
                    <Col >
                    <h1>{this.props.movie.title}</h1>
                    <h2>Director: {this.props.movie.director}</h2>
                    <h2>Year of Release: {this.props.movie.released}</h2>
                    <h2>Rating: {this.props.movie.rated}</h2>
                    <h2>Plot: {this.props.movie.plot}</h2>
                    </Col>
                    <Col>
                    <img src={this.props.movie.poster} />
                    </Col>
                </Row>
            </Container>
        )
    }
}