package com.revature.movies.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.movies.models.Actor;
import com.revature.movies.models.Director;
import com.revature.movies.models.Genre;
import com.revature.movies.models.Movie;
import com.revature.movies.repositories.MovieRepositoryClass;
import com.revature.movies.repositories.MovieRepositoryInterface;

@Service
public class MovieServices implements MovieServicesInterface  {
  
  @Autowired
  MovieRepositoryInterface movieRepositoryInterface;
  @Autowired
  MovieRepositoryClass movieRepositoryClass;
  
  @Override
  public List<Movie> getAll() {
	 
	 return movieRepositoryInterface.findAllSorted();
 }
  
  @Override
  public Movie getByTitle(String title) {
	  System.out.println(title);
	 return movieRepositoryInterface.findByTitle(title);
  }
  
  @Override
  public List<Movie> getMoviesWithDirector() {
	  return movieRepositoryInterface.findAll();
  }
 
  /*public void addNewActors(List<Actor> actors) {
	  System.out.println(actors.toString());
	  movieRepositoryClass.addNewActors(actors);
  }
  
  public void addNewGenres(List<Genre> genres) {
	  System.out.println(genres.toString());
	  movieRepositoryClass.addNewGenres(genres);
  }*/
  
  public void addNewDirector(Director director) {
	  System.out.println(director.toString());
	  movieRepositoryClass.addNewDirector(director);
  }
  
  /*public void addNewMovie(int movieId, String imdbId, String title, String rated, String released, String runtime, Director director, List<Actor> actors, List<Genre> genres, String plot, String poster, int imdbRating, double metascore, String trailer) { 
  
  	movieRepositoryClass.addNewMovie( movieId,  imdbId,  title,  rated,  released,  runtime,  director,  actors,  genres,  plot,  poster,  imdbRating,  metascore, trailer);
}*/
  
}  
 