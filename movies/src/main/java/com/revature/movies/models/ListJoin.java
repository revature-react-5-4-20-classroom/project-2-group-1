package com.revature.movies.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="listjoin", schema="project2")
public class ListJoin {

  @Id
  @Column(name="listjoinid")
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int listJoinId;
  
  @Column(name="movieid")
  private int movieId;
  
  @Column(name="userlistid")
  private int userListId;

  public int getListJoinId() {
    return listJoinId;
  }

  public void setListJoinId(int listJoinId) {
    this.listJoinId = listJoinId;
  }

  public int getMovieId() {
    return movieId;
  }

  public void setMovieId(int movieId) {
    this.movieId = movieId;
  }

  public int getUserListId() {
    return userListId;
  }

  public void setUserListId(int userListId) {
    this.userListId = userListId;
  }
  
  
}
