package com.revature.movies.controllers; 
import java.util.List; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.GetMapping; 
import org.springframework.web.bind.annotation.RestController; 
import com.revature.movies.models.Genre; 
import com.revature.movies.services.GenreServices; 
 
 
@RestController 
public class GenreController { 
   
  @Autowired 
  GenreServices genreServices; 
   
  @GetMapping("/genres") 
  public List<Genre> getAllGenres()  { 
     return genreServices.getAll(); 
} 
} 