package com.revature.movies.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.revature.movies.repositories.ListJoinRepository;

@Service
public class ListJoinService implements ListJoinServiceInterface{

  @Autowired
  ListJoinRepository listJoinRepository;
  
  @Override
  public int addMovieToList(int movieId, int userListId) {
    return listJoinRepository.addMovieToList(userListId, movieId);
  }

  @Override
  public int removeMovieFromList(int movieId, int userListId) {
    return listJoinRepository.removeMovieFromList(userListId, movieId);
  }
  

}
