import { Movie } from "./Movie";

export class UserList
{
    userListId: number
    listName: string
    listOwner: {userId: number, username: string}
    movies: Movie[]

    constructor(userListId: number, listName: string, listOwner: {userId: number, username: string}, movies: Movie[])
    {
        this.userListId = userListId;
        this.listName = listName;
        this.listOwner = listOwner; 
        this. movies = movies;
    }
}