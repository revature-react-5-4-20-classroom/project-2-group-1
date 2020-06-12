package controllers;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import models.Movie;
import services.MovieServices;

@RestController
public class MovieController {
  
  @Autowired
  MovieServices movieServices;
  
  @GetMapping("/hello")
  public String testEndpoint() {
    return "Hello";
  }
  
  @GetMapping("/movies")
  public List<Movie> GetAllMovies()  {
     return movieServices.getAll();
}
}