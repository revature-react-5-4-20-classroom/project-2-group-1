package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;



@Entity
@Table (schema="project2", name="project2")
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
  @OneToMany(mappedBy="genremovies")
  private int genreId;
  @ManyToOne
  @JoinColumn(name="directorid")
  private int directorId;
  @OneToMany(mappedBy="actormovies")
  private int actorId;
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


  public Movie(int movieid, String imdbid, String title, String rated, String released, String runtime, int genreid, int directorid, int actorid, String plot, String poster, int imdbrating, double metascore, String trailer) {
    this.movieId=movieid;
    this.imdbId=imdbid;
    this.title=title;
    this.rated=rated;
    this.released=released;
    this.runtime=runtime;
    this.genreId=genreid;
    this.directorId=directorid;
    this.actorId=actorid;
    this.plot=plot;
    this.poster=poster;
    this.imdbRating=imdbrating;
    this.metascore=metascore;
    this.trailer=trailer;
  }

  @Override
  public String toString() {
    return "Movie [movieId=" + movieId + ", imdbId=" + imdbId + ", title=" + title + ", rated="
        + rated + ", released=" + released + ", runtime=" + runtime + ", genreId=" + genreId
        + ", directorId=" + directorId + ", actorId=" + actorId + ", plot=" + plot + ", poster="
        + poster + ", imdbRating=" + imdbRating + ", metascore=" + metascore + ", trailer="
        + trailer + "]";
  }


  public int getMovieId() {
    return movieId;
  }


  public void setMovieId(int movieId) {
    this.movieId = movieId;
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


  public int getGenreId() {
    return genreId;
  }


  public void setGenreId(int genreId) {
    this.genreId = genreId;
  }


  public int getDirectorId() {
    return directorId;
  }


  public void setDirectorId(int directorId) {
    this.directorId = directorId;
  }


  public int getActorId() {
    return actorId;
  }


  public void setActorId(int actorId) {
    this.actorId = actorId;
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
 
  
  
  
   
