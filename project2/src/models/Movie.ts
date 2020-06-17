
export class Movie
{
    movieId: number;
    imdbId: string;
    title: string;
    rated: string;
    released: string;
    runtime: string;
    director: string;
    plot: string;
    poster: string;
    imdbRating: number;
    metascore: number;
    trailer: string;
    
    
    constructor( movieId: number, imdbId: string, title: string, rated: string, released: string, runtime: string, director: string, plot: string, poster: string, imdbRating: number, metascore: number, trailer: string) {
        this.movieId = movieId;
        this.imdbId = imdbId;
        this.title = title;
        this.rated = rated;
        this.released = released;
        this.runtime = runtime;
        this.director = director;
        this.plot = plot;
        this.poster = poster;
        this.imdbRating = imdbRating;
        this.metascore = metascore;
        this.trailer = trailer;
        
    }
}