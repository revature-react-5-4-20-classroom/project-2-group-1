package com.revature.movies.services;

public interface ListJoinServiceInterface {
  
  public int addMovieToList(Integer movieId, int userListId);
  
  public int removeMovieFromList(Integer movieId, int userListId);

}
