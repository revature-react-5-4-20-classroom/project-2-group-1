package com.revature.movies.controllers; 
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;


import com.revature.movies.exceptions.MovieNotFoundException;

import com.revature.movies.models.Movie; 
import com.revature.movies.services.MovieServices; 
 
@RestController 
public class MovieController { 
   
  @Autowired 
  MovieServices movieServices; 
   
   @GetMapping("/movies") 
  public List<Movie> getAllMovies()  { 
     return movieServices.getAll(); 
} 
   @GetMapping("/movies/{id}")
   public Movie getMovieById(@PathVariable Integer id) {
     try {
       return movieServices.getById(id);
     } catch (MovieNotFoundException e) {
       throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie not found", e);
     }
   }
  
   @GetMapping("/movies/{title}")
   public Movie getMovieByTitle(@PathVariable String title) {
     try {
       return movieServices.getByTitle(title);
     } catch (MovieNotFoundException e) {
       throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No movies found with that title", e);
     }
   }
	   
   
   @GetMapping("/movies/ratings/{iRating}")
   public List<Movie> getMovieByiRating(@PathVariable Double iRating) {
     try {
       return movieServices.findAll(iRating);
     } catch (MovieNotFoundException e) {
       throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No movies found greater than or equal to that imdb rating", e);
     }
   }
   
   @GetMapping("/movies/{metascore}")
  public List<Movie> getMovieByMetascore(@PathVariable int metascore) {
    try {
       return movieServices.findAll(metascore);
     } catch (MovieNotFoundException e) {
       throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No movies found greater than or equal to that imdb metascore", e);
     }
   }
     @GetMapping("/movies/ratings/{imdbNum}")
     public List<Movie> getMovieByimdbNumber(@PathVariable String imdbNumber) {
      try {
         return movieServices.findAll(imdbNumber);
       } catch (MovieNotFoundException e) {
         throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No movies found with that imdb number", e);
       }
     }
	   
   }
