package com.revature.movies.models;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;



@Entity
@Table (schema="project2", name="directors")
public class Director {
  @Id
  @Column(name="directorid")
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int directorId;
  //@OneToMany(mappedBy="movieid")
  @Column(name="directorname")
  private String directorName;
  @OneToMany(mappedBy = "directorId", fetch = FetchType.EAGER)
  private List<Movie> movieList;
  
  public Director() {
    super();
    
  }
  public Director(String directorName) {
    super();
    
    this.directorName = directorName;
  }
  @Override
  public String toString() {
    return "Director [directorId=" + directorId + ", directorName=" + directorName + "]";
  }
  public int getDirectorId() {
    return directorId;
  }
 
  public String getDirectorName() {
    return directorName;
  }
  public void setDirectorName(String directorName) {
    this.directorName = directorName;
  } 
}
