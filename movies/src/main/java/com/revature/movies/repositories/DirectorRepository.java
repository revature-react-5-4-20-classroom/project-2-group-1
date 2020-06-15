package com.revature.movies.repositories;



import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.revature.movies.models.Director;


public interface DirectorRepository extends JpaRepository  <Director, Integer> {
  @Query("select d from Director d order by d.directorName")
 List<Director> findAllSorted();
}
