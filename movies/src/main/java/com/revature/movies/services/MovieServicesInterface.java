package com.revature.movies.services;


import java.util.List;
import com.revature.movies.models.Movie;



public interface MovieServicesInterface {

	public List<Movie> getAll();
	public Movie getByTitle(String title);
	public List<Movie> getMoviesWithDirector();

}
