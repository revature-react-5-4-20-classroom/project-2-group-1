package com.revature.movies.repositories;



import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.revature.movies.models.Director;
import com.revature.movies.models.Movie;


public interface DirectorRepository extends JpaRepository  <Director, Integer> {
}