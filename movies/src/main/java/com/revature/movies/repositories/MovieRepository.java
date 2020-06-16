package com.revature.movies.repositories;



import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.movies.models.Movie;

@Repository
public interface MovieRepository extends JpaRepository  <Movie, Integer> {
  @Query("select m from Movie m order by m.title")
 List<Movie> findAllSorted();
}
