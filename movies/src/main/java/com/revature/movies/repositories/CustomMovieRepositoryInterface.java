package com.revature.movies.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.revature.movies.models.Movie;

@Repository
public interface CustomMovieRepositoryInterface {

@Query("select m from Movie m where m.imdbRating >= minRating")	
public List<Movie> findAll(double minRating);
		 
@Query("select m from Movie m where m.metascore >= minMetascore")
List<Movie> findAll(int minMetascore);
	
}