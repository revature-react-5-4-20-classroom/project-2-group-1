package com.revature.movies.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.revature.movies.models.Movie;


@Repository
public interface MovieRepository extends JpaRepository  <Movie, Integer>  {
	@Query("select m from Movie m order by m.movieId")
	List<Movie> findAllSorted(); 
	
	@Query("select m from Movie m  where lower(m.title) = :title")
	Movie findByTitle(String title);
	
	
	@Query(value="select * from movies left JOIN directors on movies.directorid=directors.dirid", nativeQuery = true)
	 List<Movie> findAll();
	}
  
