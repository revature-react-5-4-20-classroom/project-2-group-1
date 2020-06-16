package com.revature.movies.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.revature.movies.models.Movie;
import com.revature.movies.repositories.MovieRepository;



@Service
public class MovieServices implements MovieServicesInterface {
  
  @Autowired
  MovieRepository movieRepository;
  
  @Override
  public List<Movie> getAll() {
   return movieRepository.findAllSorted();
  }
  
  @Override
  public Optional<Movie> getById(Integer movieid) {
	  
	  return movieRepository.findById(movieid);
  }
  
  
}