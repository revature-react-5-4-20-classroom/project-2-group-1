package com.revature.movies.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.revature.movies.models.Movie;
import com.revature.movies.repositories.MovieRepository;

@Service
public class MovieServices implements MovieServicesInterface  {
  
  @Autowired
  MovieRepository movieRepository;
  
 public List<Movie> getAll() {
	 
	 return movieRepository.findAllSorted();
 }
  
  @Override
  public Movie getByTitle(String title) {
	  System.out.println(title);
	 return movieRepository.findByTitle(title);
  }
  
  
}
  
  
 