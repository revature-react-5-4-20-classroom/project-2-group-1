package com.revature.movies.controllers; 


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import com.revature.movies.exceptions.MovieNotFoundException;
import com.revature.movies.exceptions.UpdateUnsuccessfulException;
import com.revature.movies.models.Movie;
import com.revature.movies.services.MovieServices; 
 
@RestController
//@RequestMapping(path="/movies")
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
  
   @GetMapping("/movies") 
   public List<Movie> getAllMovies()  { 
     return movieServices.getAll(); 
 }  
   
   @GetMapping("/directors")
   public List<Movie> findAllMoviesWithDirector() {
	     try {
	    	
	       return movieServices.getMoviesWithDirector();
	     } catch (MovieNotFoundException e) {
	       throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No movies found with that director", e);
	     }
	   }

   @PostMapping("/movies")
   public void addNewMovie (@RequestBody Movie movie) {
	   
	// try {   
		 
		 System.out.println(movie.toString());
		 
		 //movieServices.addNewActors(movie.getActors());
		 //movieServices.addNewGenres(movie.getGenres());
		 movieServices.addNewDirector(movie.getDirector());
	   //movieServices.addNewMovie(movie.getMovieId(), movie.getImdbId(), movie.getTitle(), movie.getRated(), movie.getReleased(), movie.getRuntime(), movie.getDirector(), movie.getActors(), movie.getGenres(), movie.getPlot(), movie.getPoster(), movie.getImdbRating(), movie.getMetascore(), movie.getTrailer());
	  
	  
   /*}   catch (Exception e) {
	   
	   	throw new UpdateUnsuccessfulException("Something went wrong, please try again or contact a site administrator.");
   }*/
} 

  
	   
   
} 
  
   
    
  