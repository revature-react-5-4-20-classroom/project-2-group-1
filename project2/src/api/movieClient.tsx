import axios from 'axios';
import {Movie} from "../models/Movie"
import {basename} from "path"

const movieClient = axios.create({
    baseURL: "http://localhost:8080", 
    withCredentials: true, 
})

export async function getAllMovies(): Promise<Movie[]>
{
    const response = await movieClient.get("/movies");
    return response.data.map((movieObj: any)=>{
        const {movieId, imdbId, title, rated, released, runtime, director, plot, poster, imdbRating, metascore, trailer} = movieObj;

        var temp = new Movie(movieId, imdbId, title, rated, released, runtime, director, plot, poster, imdbRating, metascore, trailer, [], []);
        
        return temp;
    })
}

export async function  getMovieBy(title: string): Promise<Movie[]>
{
    const response = await movieClient.get(`/movies/${title}`);
    return response.data.map((movieObj: any)=>{
        const {movieId, imdbId, title, rated, released, runtime, director, plot, poster, imdbRating, metascore, trailer} = movieObj
        return new Movie(movieId, imdbId, title, rated, released, runtime, director, plot, poster, imdbRating, metascore, trailer, [], [])
    })
    
}
