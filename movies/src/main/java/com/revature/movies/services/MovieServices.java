package com.revature.movies.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.revature.movies.exceptions.MovieNotFoundException;

import com.revature.movies.models.Movie;
import com.revature.movies.repositories.CustomMovieRepositoryInterface;
import com.revature.movies.repositories.MovieRepository;



@Service
public class MovieServices implements MovieServicesInterface, CustomMovieRepositoryInterface  {
  
  @Autowired
  MovieRepository movieRepository;
  CustomMovieRepositoryInterface customRepository;
  
  @Override
  public List<Movie> getAll() {
   return movieRepository.findAllSorted();
  }
  
  @Override
  public Movie getById(Integer id) {
    //findById returns on Optional, lets resolve that optional here in the service layer
    Optional<Movie> movie = movieRepository.findById(id);
    if(movie.isPresent()) {
        return movie.get();
    } else {
        throw new MovieNotFoundException();
    }
  }
  
  @Override
  public Movie getByTitle(String title) {
    //findByTitle returns on Optional, lets resolve that optional here in the service layer
    Optional<Movie> movie = movieRepository.findByTitle(title);
    if(movie.isPresent()) {
        return movie.get();
    } else {
        throw new MovieNotFoundException();
    }
  }
  
  @Override
  public List<Movie> findAll(double minRating) {
	  return customRepository.findAll(minRating);
  }
  
  @Override
  public List<Movie> findAll(int metascore) {
	  return customRepository.findAll(metascore);
  }
 
  @Override
  public List<Movie> findAll(String imdbNumber) {
	  return movieRepository.findAll(imdbNumber);
  }
  
  
  
}