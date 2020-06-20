package com.revature.movies.services;

public interface ListJoinServiceInterface {
  
  public int addMovieToList(int movieId, int userListId);
  
  public int removeMovieFromList(int movieId, int userListId);

}
