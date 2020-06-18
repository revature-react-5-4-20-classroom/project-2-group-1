  package com.revature.movies.models;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
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
  @Column(name="directorid")
  private int directorId;
  //private String directorName;
  @ManyToMany(cascade=CascadeType.ALL)
  @JoinTable(name="actorsjoin",schema = "project2",joinColumns=@JoinColumn(name="movieid"),inverseJoinColumns=@JoinColumn(name="actorid") )
  @JsonIgnoreProperties({"movies"})
  private List<Actor> actors=new ArrayList<Actor>(150);
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


  public Movie(String imdbid, String title, String rated, String released, String runtime,int directorsId, String directorsName, String plot, String poster, int imdbrating, double metascore, String trailer) {
    
    this.imdbId=imdbid;
    this.title=title;
    this.rated=rated;
    this.released=released;
    this.runtime=runtime;
    this.directorId=directorsId;
    //this.directorName=directorsName;
    //this.actor=actor;
    this.plot=plot;
    this.poster=poster;
    this.imdbRating=imdbrating;
    this.metascore=metascore;
    this.trailer=trailer;
  }

  @Override
  public String toString() {
	 
    return "Movie [movieId=" + movieId + ", imdbId=" + imdbId + ", title=" + title + ", rated="
        + rated + ", released=" + released + ", runtime=" + runtime + ", directorId=" + directorId +/* ", directors Name=" + directorName + */", plot=" + plot + ", poster="
        + poster + ", imdbRating=" + imdbRating + ", metascore=" + metascore + ", trailer="
        + trailer + "]";
  }
 
  
  public int getMovieId() {
    return movieId;
  }


  public int getDirectorId() {
	  return directorId;
  }

  public void setDirectorId(int dirid) {
	  this.directorId = dirid;
  }
  
  /*public String getDirectorName () {
	  return directorName;
  }

  public void setDirectorName(String name) {
	  this.directorName = name;
  }*/
  
  public String getImdbId() {
    return imdbId;
  }


  public List<Actor> getActors() {
	return actors;
}


public void setActors(List<Actor> actors) {
	this.actors = actors;
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

  
}
