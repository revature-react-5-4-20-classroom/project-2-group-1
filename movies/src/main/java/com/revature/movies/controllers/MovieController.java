package com.revature.movies.controllers; 
import java.util.List;
import java.util.Optional;

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
  
   public Optional<Movie> getMovieById(@PathVariable Integer id) {
     try {
       return movieServices.getById(id);
     } catch (MovieNotFoundException e) {
       throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie not found", e);
     }
   }
	   
   }
