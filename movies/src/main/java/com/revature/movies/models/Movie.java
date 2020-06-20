 package com.revature.movies.models;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table (name="movies", schema="project2")
public class Movie {
   @Id
  @Column(name="movieid")
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int movieId;
   
  @Column(name="imdbid")
  private String imdbId;
  @Column(name="title")
  private String title;
  @Column(name="rated")
  private String rated;
  @Column(name="released")
  private String released;
  @Column(name="runtime")
  private String runtime;
  
  @JoinColumn(name = "directorid")
  @ManyToOne(fetch = FetchType.EAGER)
  @JsonIgnoreProperties({"directors","director", "movielist"})
  private Director director;
  
  @ManyToMany(cascade=CascadeType.ALL)
  @JoinTable(name="actorsjoin",schema = "project2",joinColumns=@JoinColumn(name="movieid"),inverseJoinColumns=@JoinColumn(name="actorid") )
  @JsonIgnoreProperties({"movies", "actorid"})
  private List<Actor> actors = new ArrayList<Actor>(150);
  
  @ManyToMany(cascade=CascadeType.ALL)
  @JoinTable(name="genresjoin",schema = "project2",joinColumns=@JoinColumn(name="movieid"),inverseJoinColumns=@JoinColumn(name="genreid") )
  @JsonIgnoreProperties({"movies", "genreid"})
  private List<Genre> genres = new ArrayList<Genre>(150);
  
  @Column(name="plot")
  private String plot;
  @Column(name="poster")
  private String poster;
  @Column(name="imdbrating")
  private int imdbRating;
  @Column(name="metascore")
  private double metascore;
  @Column(name="trailer")
  private String trailer;
  
  
  
  public Movie() {
    super();}




  public Movie(int movieId, String imdbId, String title, String rated, String released, String runtime, Director director,
		List<Actor> actors, List<Genre> genres, String plot, String poster, int imdbRating, double metascore,
		String trailer) {
	super();
	this.movieId = movieId;
	this.imdbId = imdbId;
	this.title = title;
	this.rated = rated;
	this.released = released;
	this.runtime = runtime;
	this.director = director;
	this.actors = actors;
	this.genres = genres;
	this.plot = plot;
	this.poster = poster;
	this.imdbRating = imdbRating;
	this.metascore = metascore;
	this.trailer = trailer;
}




@Override
public String toString() {
	return "Movie [movieId=" + movieId + ", imdbId=" + imdbId + ", title=" + title + ", rated=" + rated + ", released="
			+ released + ", runtime=" + runtime + ", director=" + director + ", actors=" + actors + ", genres=" + genres
			+ ", plot=" + plot + ", poster=" + poster + ", imdbRating=" + imdbRating + ", metascore=" + metascore
			+ ", trailer=" + trailer + "]";
}
 
  
  public Director getDirector() {
	return director;
}


public void setDirector(Director director) {
	this.director = director;
}

public int getMovieId() {
    return movieId;
  }

public void setMovieId(int movieId) {
	this.movieId = movieId;
}

  public List<Actor> getActors() {
	return actors;
}
 
public void setActors(List<Actor> actors) {
	this.actors = actors;
}

public String getImdbId() {
    return imdbId;
  }
public void setImdbId(String imdbId) {
    this.imdbId = imdbId;
  }


  public String getTitle() {
    return title;
  }


  public void setTitle(String title) {
    this.title = title;
  }


  public String getRated() {
    return rated;
  }


  public void setRated(String rated) {
    this.rated = rated;
  }


  public String getReleased() {
    return released;
  }


  public void setReleased(String released) {
    this.released = released;
  }


  public String getRuntime() {
    return runtime;
  }


  public void setRuntime(String runtime) {
    this.runtime = runtime;
  }


  
  
  public String getPlot() {
    return plot;
  }


  public void setPlot(String plot) {
    this.plot = plot;
  }


  public String getPoster() {
    return poster;
  }


  public void setPoster(String poster) {
    this.poster = poster;
  }


  public int getImdbRating() {
    return imdbRating;
  }


  public void setImdbRating(int imdbRating) {
    this.imdbRating = imdbRating;
  }


  public double getMetascore() {
    return metascore;
  }


  public void setMetascore(double metascore) {
    this.metascore = metascore;
  }


  public String getTrailer() {
    return trailer;
  }


  public void setTrailer(String trailer) {
    this.trailer = trailer;
  }


public List<Genre> getGenres() {
	return genres;
}


public void setGenres(List<Genre> genres) {
	this.genres = genres;
}

}