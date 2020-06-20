import axios from 'axios';
import {Movie} from "../models/Movie"
import {basename} from "path"
import { objectArrayToStringArray } from '../utils';
import { User } from '../models/Users';



const movieClient = axios.create({
    baseURL: "http://ec2-18-223-3-0.us-east-2.compute.amazonaws.com:7773/", 
    withCredentials: true, 
})

//! Movie stuff
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

//! Login stuff
export async function login(un: string, pw: string): Promise<User>{
    try{
        console.log("In the backend client log in function");
        const response = await movieClient.post("users/login", {username: un, password: pw});
        const {userId, username, password, email} = response.data;
        return new User(userId, username, password, email)
    }
    catch(e){
        if(e.response.status===401){
            throw new Error(`Failed to authenticate with username: ${un}`);
        }
        else{
            throw new Error("There was a problem logging in");
        }
    }
}

export async function submitUser(u: User)
{
    try 
    {
        const response = await movieClient.post("users/register", {
            userId: 0,
            username: u.username,
            password: u.password, 
            email: u.email

        })
    }
    catch(e)
    {
        throw(e.message)
    }
}


//! USER LIST STUFF


interface IPromiseGetUserListBy {
    movies: Movie[],
    listName: string,
    listOwner: any,
    userListId: number
}
// Get the userList by userId
export async function getUserListBy(userId: number): Promise<IPromiseGetUserListBy> //Promise<Movie[]>
{
    // Probably going to need a try catch block here
    const response = await movieClient.get(`/userlists/users/${userId}`);
    console.log(response.data[0]);
    const { listName, listOwner, movies, userListId } = response.data[0];
    console.log("After the backend has been queryed");
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

// Get the userList by listId
export async function getUserListByListId(listId: number): Promise<any> 
{
    const response = await movieClient.get(`/userlists/${listId}`);
    const { listName, listOwner, movies, userListId } = response.data;
    console.log("After the backend has been queryed");
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

// Get all userLists
export async function getAllUserLists(): Promise<any> //Promise<UserLists>
{
    // Probably going to need a try catch block here
    const response = await movieClient.get(`/userlists`);
    console.log("After the backend has been queryed");
    let userListArr = response.data.map((userlist: any) => {
        let { userListId, listName, listOwner } = userlist;
        return  { userListId, listName, listOwner };
    })
    return userListArr;
}

// Delete Movie from userlist by listid
export async function deleteMovieFromUserList(movieId: number): Promise<any>
{
    try {
        const response = await movieClient.delete(`/userlists/${movieId}`);
        console.log("After the backend has been queryed");
        // This should return how many movies were deleted
        return response.data;
    } catch (e) {
        console.log(e.message);
    }
}