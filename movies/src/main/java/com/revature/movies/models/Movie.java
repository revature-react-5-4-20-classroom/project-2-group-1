  package com.revature.movies.models;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
import javax.persistence.Table;



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
  //@ManyToOne
  //@JoinColumn(name="directorid")
  @Column(name="directorid")
  private int directorId;
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


  public Movie(int movieid, String imdbid, String title, String rated, String released, String runtime, int directorid, String plot, String poster, int imdbrating, double metascore, String trailer) {
    this.movieId=movieid;
    this.imdbId=imdbid;
    this.title=title;
    this.rated=rated;
    this.released=released;
    this.runtime=runtime;
    this.directorId=directorid;
    this.plot=plot;
    this.poster=poster;
    this.imdbRating=imdbrating;
    this.metascore=metascore;
    this.trailer=trailer;
  }

  @Override
  public String toString() {
    return "Movie [movieId=" + movieId + ", imdbId=" + imdbId + ", title=" + title + ", rated="
        + rated + ", released=" + released + ", runtime=" + runtime + ", directorId=" + directorId + ", plot=" + plot + ", poster="
        + poster + ", imdbRating=" + imdbRating + ", metascore=" + metascore + ", trailer="
        + trailer + "]";
  }


  public int getMovieId() {
    return movieId;
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


  public int getDirectorId() {
    return directorId;
  }


  public void setDirectorId(int directorId) {
    this.directorId = directorId;
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
