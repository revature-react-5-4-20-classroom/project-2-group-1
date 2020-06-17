package com.revature.movies.services;
import java.util.List;


import com.revature.movies.models.Movie;



public interface MovieServicesInterface {

 public List<Movie> getAll();
 public Movie getById(Integer id);
 public Movie getByTitle(String title);
 public List<Movie> findAll(int metascore);
 public List<Movie> findAll(String imdbNumber);
 
}
