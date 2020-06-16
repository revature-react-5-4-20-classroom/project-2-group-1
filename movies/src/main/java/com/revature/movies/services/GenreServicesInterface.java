package com.revature.movies.services;
import java.util.List;


import com.revature.movies.models.Genre;



public interface GenreServicesInterface {

 public List<Genre> getAll();
 
 Genre getById(Integer id);
 Genre create(Genre genre);
 Genre update(Genre genre);
 Genre createOrUpdate(Genre genre);
 void delete(Integer id);
 
}
