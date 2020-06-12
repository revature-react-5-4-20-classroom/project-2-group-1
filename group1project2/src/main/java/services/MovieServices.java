package services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import models.Movie;
import repositories.MovieRepository;


@Service
@Primary
public class MovieServices implements MovieServicesInterface {
  
  @Autowired
  MovieRepository movieRepository;
  
  @Override
  public List<Movie> getAll() {
   return movieRepository.findAllSorted();
  }
  
  
  
}