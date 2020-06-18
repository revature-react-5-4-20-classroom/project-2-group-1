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
        const {movieId, imdbId, title, rated, released, runtime, director, plot, poster, imdbRating, metascore, trailer, genres, actors} = movieObj;

        var temp = new Movie(movieId, imdbId, title, rated, released, runtime, director, plot, poster, imdbRating, metascore, trailer, genres, actors);
        
        return temp;
    })
}

export async function getMovieByTitle(movieTitle: string): Promise<Movie>
{
    console.log(movieTitle);
    const response = await movieClient.get(`/movies/${movieTitle}`);
    console.log("After the backend has been queryed");
    const {movieId, imdbId, title, rated, released, runtime, director, plot, poster, imdbRating, metascore, trailer, genres, actors} =  response.data;
    return new Movie(movieId, imdbId, title, rated, released, runtime, director, plot, poster, imdbRating, metascore, trailer, genres, actors);
}

// // Get the userList by userListId
// export async function getUserListBy(userListId: number): Promise<Movie[]>
// {
//     const response = await movieClient.get(`/movies/list/`)
// }