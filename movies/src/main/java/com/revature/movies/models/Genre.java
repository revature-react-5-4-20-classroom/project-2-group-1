package com.revature.movies.models;

import java.util.ArrayList;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table (name="genres", schema="project2")
public class Genre {
  @Id
  @Column(name="genreid")
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int genreId;
  
  @JsonIgnoreProperties({"genres", "genreid"})
  @ManyToMany(mappedBy="genres")
  private List<Movie> movies=new ArrayList<Movie>(150);
  
  @Column(name="genrename")
  private String genreName;
  
  @OneToMany(mappedBy = "listOwner", cascade = CascadeType.MERGE)
  @JsonIgnoreProperties({"user", "userlists"})
  private List<UserList> userLists;
  
  
  public Genre() {
    super();
    
  }

  public Genre(String genreName) {
    super();
        this.genreName = genreName;
  }

  @Override
  public String toString() {
    return "Genre [genreId=" + genreId + ", genreName=" + genreName + "]";
  }

  public int getGenreId() {
    return genreId;
  }

  

  public String getGenreName() {
    return genreName;
  }

  public void setGenreName(String genreName) {
    this.genreName = genreName;
  }
 
  public List<Movie> getMovies() {
		return movies;
	}

	public void setMovies(List<Movie> movies) {
		this.movies = movies;
	}

	public void setGenreId(int genreId) {
		this.genreId = genreId;
	}
}
