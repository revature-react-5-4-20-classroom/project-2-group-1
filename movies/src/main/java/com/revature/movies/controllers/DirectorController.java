package com.revature.movies.controllers; 
import java.util.List; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.GetMapping; 
import org.springframework.web.bind.annotation.RestController;
import com.revature.movies.models.Director;
import com.revature.movies.services.DirectorServices; 
 
 
@RestController 
public class DirectorController { 
   
  @Autowired 
  DirectorServices directorServices; 
   
  @GetMapping("/directors") 
  public List<Director> GetAllActors()  { 
     return directorServices.getAll(); 
} 
} 