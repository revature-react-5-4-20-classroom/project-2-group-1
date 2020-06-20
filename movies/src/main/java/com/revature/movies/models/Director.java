package com.revature.movies.models;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table (schema="project2", name="directors")
public class Director {
  @Id
  @Column(name="directorid")
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int dirId;
  
  @OneToMany(mappedBy = "director", cascade = CascadeType.MERGE)
  @JsonIgnoreProperties({"director", "directorid", })
  private List<Movie> movielist;
  @Column(name="directorname")
   private String directorName; 
  
 
  
  
  
public Director(String name) {
	super();
	this.dirId = 0;
	this.directorName = name;
}

public Director(List<Movie> movielist, String directorName) {
	super();
	
	this.movielist = movielist;
	this.directorName = directorName;
}


public Director() {
    super();
    
  }
  
  
  @Override
public String toString() {
	return "Director [dirId=" + dirId + ", movielist=" + movielist + ", directorName=" + directorName + "]";
}

  
  
public int getDirectorId() {
    return dirId;
  }
 
  public void setDirectorId(int directorId) {
		this.dirId = directorId;
	} 
  
  public String getDirectorName() {
    return directorName;
  }
  
 
  public void setDirectorName(String directorName) {
    this.directorName = directorName;
  }
public int getDirId() {
	return dirId;
}
public void setDirId(int dirId) {
	this.dirId = dirId;
}
public List<Movie> getMovielist() {
	return movielist;
}
public void setMovielist(List<Movie> movielist) {
	this.movielist = movielist;
}

}

