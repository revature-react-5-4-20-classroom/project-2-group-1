package com.revature.movies.models;

public class RequestModel {
  private Integer movieId;

  public Integer getMovieId() {
    return movieId;
  }

  public void setMovieId(Integer movieId) {
    this.movieId = movieId;
  }

  public RequestModel(Integer movieId) {
    super();
    this.movieId = movieId;
  }

  public RequestModel() {
    super();
  }
  
  
  
}
