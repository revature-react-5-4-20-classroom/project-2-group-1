package com.revature.movies.controllers; 




import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import com.revature.movies.exceptions.MovieNotFoundException;
import com.revature.movies.models.Movie;
import com.revature.movies.services.MovieServices; 
 
@RestController
@RequestMapping(path="/movies")
public class MovieController { 
   
  @Autowired 
  MovieServices movieServices; 
 
  @GetMapping("/{title}")
   public Movie getMovieByTitle(@PathVariable String title) {
     try {
    	
       return movieServices.getByTitle(title);
     } catch (MovieNotFoundException e) {
       throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No movies found with that title", e);
     }
   }
  
   @GetMapping 
   public List<Movie> getAllMovies()  { 
     return movieServices.getAll(); 
 }  
   
   

   

  
	   
   
} 
  
   
    
  