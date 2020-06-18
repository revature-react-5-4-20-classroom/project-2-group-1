package com.revature.movies.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table (name="actors", schema="project2")
public class Actor {
  @Id
  @Column(name="actorid")
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int actorId;

  @JsonIgnoreProperties({"actors"})
  @ManyToMany(mappedBy="actors")
  private Collection<Movie> movies=new ArrayList<Movie>(150);
  
 
  @Column(name="actorname")
  private String actorName;
  

 
  
  public Actor() {
    super();
    
  }
  public Actor(String actorName) {
    super();
    
    this.actorName = actorName;
  }
  @Override
  public String toString() {
    return "Actor [actorId=" + actorId + ", actorName=" + actorName + "]";
  }
  public int getActorId() {
    return actorId;
  }
 
  public Collection<Movie> getMovies() {
	return movies;
}
public void setMovies(Collection<Movie> movies) {
	this.movies = movies;
}
public String getActorName() {
    return actorName;
  }
  public void setActorName(String actorName) {
    this.actorName = actorName;
  }
}
