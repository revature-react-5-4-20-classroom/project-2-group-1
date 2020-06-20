package com.revature.movies.services;


import java.util.List;

import com.revature.movies.models.Actor;
import com.revature.movies.models.Director;
import com.revature.movies.models.Genre;
import com.revature.movies.models.Movie;



public interface MovieServicesInterface {

	public List<Movie> getAll();
	public Movie getByTitle(String title);
	public List<Movie> getMoviesWithDirector();
	public void addNewActors(List<Actor> actors);
	public void addNewGenres(List<Genre> genres);
	 //public void addNewDirector(Director director);
	//public void addNewMovie(int movieId, String imdbId, String title, String rated, String released, String runtime, Director director, List<Actor> actors, List<Genre> genres, String plot, String poster, int imdbRating, double metascore, String trailer);
}
