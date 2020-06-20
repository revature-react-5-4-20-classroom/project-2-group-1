import React from "react";
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MoviePreview } from "./moviePreview";
import { Movie } from "../models/Movie";
import { render } from "@testing-library/react";
import { AnyIfEmpty } from "react-redux";

interface ICarouselComponentProps
{
    movieOne: Movie;
    movieTwo: Movie;
    movieThree: Movie;
}

export default class CarouselComponent extends React.Component<ICarouselComponentProps, any>{
    render(){
        return (
            <div className="carousel-wrapper">
                <Carousel>
                    <div>
                        <MoviePreview movie={this.props.movieOne}/>
                    </div>
                    <div>
                        <MoviePreview movie={this.props.movieTwo}/>
                    </div>
                    <div>
                        <MoviePreview movie={this.props.movieThree}/>
                    </div>
                </Carousel>
            </div>
        );
    }
}