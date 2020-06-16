package com.revature.movies.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.movies.exceptions.GenreNotFoundException;

import com.revature.movies.models.Genre;

import com.revature.movies.repositories.GenreRepository;
import com.revature.movies.services.GenreServicesInterface;



@Service
public class GenreServices implements GenreServicesInterface {
  
  @Autowired
  GenreRepository genreRepository;
  
  @Override
  public List<Genre> getAll() {
   return genreRepository.findAllSorted();
  }

  @Override
  public Genre getById(Integer id) {
    //findById returns on Optional, lets resolve that optional here in the service layer
    Optional<Genre> genre = genreRepository.findById(id);
    if(genre.isPresent()) {
        return genre.get();
    } else {
        throw new GenreNotFoundException();
    }
  }

  @Override
  public Genre create(Genre genre) {
    // Testing notations
    System.out.println(genre.toString());
    return null;
//    genre.setGenreId(0);
  }

  @Override
  public Genre update(Genre genre) {
    // Testing notations
    System.out.println(genre.toString());
    return null;
  }

  @Override
  public Genre createOrUpdate(Genre genre) {
    // Testing notations
    System.out.println(genre.toString());
    return null;
  }

  @Override
  public void delete(Integer id) {
    // Testing notations
    System.out.println(id);
    
  }
  
  
}