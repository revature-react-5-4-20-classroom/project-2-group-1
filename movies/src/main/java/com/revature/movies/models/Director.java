package com.revature.movies.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table (schema="project2", name="directors")
public class Director {
  @Id
  @Column(name="directorid")
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int directorId;
//  @OneToMany(mappedBy="movieid")
  @Column(name="directorname")
  private String directorName;
  
  public Director() {
    super();
    
  }
  public Director(int directorId, String directorName) {
    super();
    this.directorId = directorId;
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
