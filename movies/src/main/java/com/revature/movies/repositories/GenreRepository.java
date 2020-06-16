package com.revature.movies.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.movies.models.Genre;

@Repository
public interface GenreRepository extends JpaRepository  <Genre, Integer> {
  @Query("select g from Genre g order by g.genreName")
 List<Genre> findAllSorted();
}
