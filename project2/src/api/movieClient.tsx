import axios from 'axios';
import {Movie} from "../models/Movie"
import {basename} from "path"
import { objectArrayToStringArray } from '../utils';



const movieClient = axios.create({
    baseURL: "http://ec2-18-223-3-0.us-east-2.compute.amazonaws.com:7773", 
    withCredentials: true, 
})

export async function getAllMovies(): Promise<Movie[]>
{
    const response = await movieClient.get("/movies");
    return response.data.map((movieObj: any)=>{
        const {movieId, imdbId, title, rated, released, runtime, director, plot, poster, imdbRating, metascore, trailer, genres, actors} = movieObj;
        let reformattedDirector = director.directorName;
        let reformattedGenres = objectArrayToStringArray("genreName", genres);
        let reformattedActors = objectArrayToStringArray("actorName", actors);
        return new Movie(movieId, imdbId, title, rated, released, runtime, reformattedDirector, plot, poster, imdbRating, metascore, trailer, reformattedGenres, reformattedActors);
    })
}

export async function getMovieByTitle(movieTitle: string): Promise<Movie>
{
    console.log(movieTitle);
    const response = await movieClient.get(`/movies/${movieTitle}`);
    console.log("After the backend has been queryed");
    const {movieId, imdbId, title, rated, released, runtime, director, plot, poster, imdbRating, metascore, trailer, genres, actors} =  response.data;
    let reformattedDirector = director.directorName;
    let reformattedGenres = objectArrayToStringArray("genreName", genres);
    let reformattedActors = objectArrayToStringArray("actorName", actors);
    return new Movie(movieId, imdbId, title, rated, released, runtime, reformattedDirector, plot, poster, imdbRating, metascore, trailer, reformattedGenres, reformattedActors);
}


interface IPromiseGetUserListBy {
    movies: Movie[],
    listName: string,
    listOwner: any,
    userListId: number
}
// Get the userList by userListId
export async function getUserListBy(userId: number): Promise<IPromiseGetUserListBy> //Promise<Movie[]>
{
    // Probably going to need a try catch block here
    const response = await movieClient.get(`/userlists/${userId}`);
    const { listName, listOwner, movies, userListId } = response.data[0];
    console.log("After the backend has been queryed");
    // console.log(response.data)
    // console.log(`listName: ${listName}`);
    // console.log(`listOwner: ${listOwner}`);
    // console.log(movies);
    // console.log(`userListId: ${userListId}`);
    let reduxMovies = movies.map((movie: any) => {
        const {movieId, imdbId, title, rated, released, runtime, director, plot, poster, imdbRating, metascore, trailer, genres, actors} = movie;
        let reformattedDirector = director.directorName;
        let reformattedGenres = objectArrayToStringArray("genreName", genres);
        let reformattedActors = objectArrayToStringArray("actorName", actors);
        return new Movie(movieId, imdbId, title, rated, released, runtime, reformattedDirector, plot, poster, imdbRating, metascore, trailer, reformattedGenres, reformattedActors);
    })
    // console.log(reduxMovies);
    return {
        movies: reduxMovies,            
        listName,
        listOwner,
        userListId
    }

}


