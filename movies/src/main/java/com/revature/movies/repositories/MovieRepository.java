package com.revature.movies.repositories;



import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.movies.models.Movie;

@Repository
public interface MovieRepository extends JpaRepository  <Movie, Integer>, CustomMovieRepositoryInterface {
  @Query("select m from Movie m order by m.title")
 List<Movie> findAllSorted();

  @Query("select m from Movie m where m.title=title")
  Optional<Movie> findByTitle (String title);
  
  @Query("select m from Movie m where m.movieId=movieid")
  Optional<Movie> findById (Integer movieid);

@Query("select m from Movie m where m.imdbId = imdbNumber")
List<Movie> findAll(String imdbNumber);

}
