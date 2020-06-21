import React from "react";
import { Table, Container, Row, Col, Button } from "reactstrap"
import { Movie } from "../models/Movie";
import { useHistory } from "react-router";

interface IMoviePreivewProps
{
    movie: Movie;
    deleteButton?: boolean;
    onClick?: (e: any) => void;
    onDelete?: (e: any) =>void;

}

export class MoviePreview extends React.Component<IMoviePreivewProps>
{


    // routeChange=()=>{
    //     let path =`movies/title/${this.props.movie.title}`
    //     this.props.history.push(path)
    // }
    
    render()
    {
        return(
            <>
                <Row>
                    <Col className="myColumn moviePadding">
                    <h1>{this.props.movie.title}</h1>
                    <h2>Director: {this.props.movie.director}</h2>
                    <h2>Year of Release: {this.props.movie.released}</h2>
                    <h2>Rating: {this.props.movie.rated}</h2>
                    <h2>Plot: {this.props.movie.plot}</h2>
                    </Col>
                    <Col>
                    <div className="ourPoster posterWrapper">
                        <img src={this.props.movie.poster}  onClick={this.props.onClick} className="ourPoster"/>
                    </div>
                    </Col>
                </Row>
                {this.props.deleteButton ? 
                    <Row>
                        <Col></Col>
                        <Col>
                            <Button color="danger" className="centerElement myButton" value={this.props.movie.movieId} onClick={this.props.onDelete}>Remove From List</Button>
                        </Col>
                    </Row>
                    : ""
                }
            </>
        )
    }
}