package com.revature.movies.services;
import java.util.List;
import java.util.Optional;

import com.revature.movies.models.Movie;



public interface MovieServicesInterface {

 public List<Movie> getAll();
 public Optional<Movie> getById(Integer id);
 
}
